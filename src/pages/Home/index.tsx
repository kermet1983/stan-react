import { Box, Carousel } from '@/components';
import { CarouselSkeleton } from '@/components/Carousel/CarouselSkeleton';
import Image from '@/components/Image/Image';
import { CarouselItemRenderProps, ProgramProps } from '@/types';
import { useFetch } from '@/utils/hooks';
import useScreenSize from '@/utils/hooks/useScreenSize';
import { useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const CAROUSEL_MAX_VISIBLE_ITEMS = 6;

const Home = () => {
  const { data, loading, error } = useFetch<ProgramProps[] | null>({ url: 'data/data.json' });
  const { state } = useLocation();
  const navigate = useNavigate();
  const screenSize = useScreenSize();

  // get max number of items to render based off screen size
  const getItemsToShow = useMemo(() => {
    let result = CAROUSEL_MAX_VISIBLE_ITEMS;
    switch (screenSize) {
      case 'lg':
        result = CAROUSEL_MAX_VISIBLE_ITEMS - 1;
        break;
      case 'md':
        result = CAROUSEL_MAX_VISIBLE_ITEMS - 2;
        break;
      case 'xs':
      case 'sm':
        result = CAROUSEL_MAX_VISIBLE_ITEMS - 3;
        break;
      default:
        break;
    }

    return result;
  }, [screenSize]);

  // find the index of the active selected program
  const activeIndex = useMemo(() => {
    return state?.programId ? data?.findIndex((program) => program?.id === Number(state?.programId)) : 0;
  }, [data]);

  // navigate to program with program ID
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
          itemsToShow={getItemsToShow}
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
