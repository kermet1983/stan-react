import StyledSkeleton from '../Skeleton/Skeleton';

export const CarouselSkeleton = ({ index }: { index: string | number }) => {
  const key = `carousel-item-${index}`;
  return (
    <div data-testid="carousel-item-loading" key={key} className="carousel-item">
      <div className="carousel-item-border">
        <StyledSkeleton width="100%" height="25vh" data-testid="styled-skeleton" />
      </div>
    </div>
  );
};

export const CarouselSkeletons = ({ itemsToShow }: { itemsToShow: number }) => {
  const fakeItems: number[] = Array.from(Array(itemsToShow).keys());
  return fakeItems.map((item: number) => {
    return <CarouselSkeleton key={`carousel-skeleton-${item}`} index={item} />;
  });
};
