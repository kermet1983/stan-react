export const carouselItemWidth = (itemsToShow: number) => {
  return `calc((100% / ${itemsToShow}) + ((100% / ${itemsToShow}) / ${itemsToShow}))`;
};
