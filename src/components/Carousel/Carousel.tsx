import React, { useEffect, useMemo, useState } from 'react';
import { CarouselProps } from '@/types';
import { styled } from 'styled-components';
import { CarouselSkeletons } from './CarouselSkeleton';
import Box from '../Box/Box';
import { device } from '@/utils/breakpoints';
import { carouselItemWidth } from '@/utils/carousel';

const StyledCarousel = styled(Box)<Pick<CarouselProps, 'itemsToShow'>>`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  > div.carousel-item {
    flex: 0 0 auto;
    scroll-snap-align: start;
    width: ${({ itemsToShow }) => carouselItemWidth(itemsToShow)};
    &.active {
      .carousel-item-border {
        a {
          border-color: #07f;
          padding: 3px;
          overflow: hidden;
          border-radius: 5px;
        }
      }
    }
    .carousel-item-border {
      margin-right: 3px;

      a {
        display: block;
        position: relative;
        border: solid 4px black;
        padding: 3px;
        img {
          max-width: 100%;
          display: block;
        }
      }
    }
  }
`;

const Carousel: React.FC<CarouselProps> = ({
  loading,
  items = [],
  itemsToShow = 1,
  activeIndex,
  renderItem,
  onItemSelect,
}) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);

  const safeItems = items || [];
  const startCeiling = itemsToShow - 2;
  const activeIndicator = Math.min(startCeiling, currentIndex);

  // memorise the items sliced from the list of items based on the itemsToShow prop
  const memorisedVisibleItems = useMemo(() => {
    let startIndex = currentIndex - startCeiling;
    if (startIndex < 0) startIndex = 0;
    const endIndex = Math.min(startIndex + itemsToShow, safeItems.length);
    const itemsResult = safeItems.slice(startIndex, endIndex);

    return itemsResult;
  }, [currentIndex, safeItems, itemsToShow]);

  // add event listeners for keydown event
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, safeItems]);

  // event listeners trigger for left/right arrow and enter keys
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;
      case 'ArrowRight':
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, safeItems.length - 1));
        break;
      case 'Enter':
        const item = memorisedVisibleItems[activeIndicator];
        // let the consuming component decide what to do once an item is selected
        onItemSelect?.(item);
        break;
      default:
        break;
    }
  };

  // Skeleton can be handled by the carousel or in the consuming component via render renderItems()
  const renderSkeleton = () => <CarouselSkeletons itemsToShow={itemsToShow} />;

  // the consuming component renders the item visually via renderItem()
  const renderItems = () => {
    return memorisedVisibleItems.map((item, itemIndex) => {
      const isActive = itemIndex === activeIndicator;
      return renderItem?.({ item, active: isActive, index: itemIndex });
    });
  };
  return (
    <StyledCarousel data-testid="carousel" itemsToShow={itemsToShow}>
      {loading !== undefined && loading ? renderSkeleton() : renderItems()}
    </StyledCarousel>
  );
};

export default Carousel;
