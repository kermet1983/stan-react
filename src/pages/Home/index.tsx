import React, { useMemo } from 'react';
import { useFetch } from '@/utils/hooks';
import { Carousel } from '@/components';
import { ProgramProps, CarouselItemRenderProps } from '@/types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@/components';
import { CarouselSkeleton } from '@/components/Carousel/CarouselSkeleton';
import Image from '@/components/Image/Image';

const Home = () => {
  const { data, loading, error } = useFetch<ProgramProps[] | null>({ url: 'data/data.json' });
  const { state } = useLocation();
  const navigate = useNavigate();
  const activeIndex = useMemo(() => {
    return state?.programId ? data?.findIndex((program) => program?.id === Number(state?.programId)) : 0;
  }, [data]);

  const handleItemSelect = (item: ProgramProps) => {
    const selectedShowId = item?.id;
    selectedShowId && navigate(`/program/${selectedShowId}`, { state: { program: item } });
  };

  const renderItem = ({ item, index, active }: CarouselItemRenderProps) => {
    return loading ? (
      <CarouselSkeleton index={index} />
    ) : (
      item && (
        <div
          data-testid="carousel-item"
          key={`carousel-item-${index}`}
          className={`carousel-item${active ? ' active' : ''}`}
        >
          <div className="carousel-item-border">
            <Link to={`program/${item?.id}`}>
              <Image src={item?.image} alt={item?.title} data-testid="carousel-item-image" />
            </Link>
          </div>
        </div>
      )
    );
  };

  const renderShowsCarousel = () => {
    return (
      <Box padding="0 0 0 40px">
        <Carousel
          itemsToShow={6}
          activeIndex={activeIndex || 0}
          items={data}
          renderItem={renderItem}
          onItemSelect={handleItemSelect}
        />
      </Box>
    );
  };
  return <div data-testid="home-page">{renderShowsCarousel()}</div>;
};
export default Home;
