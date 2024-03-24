import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Carousel from '../Carousel';
import { generateMockData } from '@/__mocks__/programs.mock';
import { ProgramProps, CarouselItemRenderProps } from '@/types';
import Image from '@/components/Image/Image';

describe('Component: Carousel', () => {
  const items: ProgramProps[] = generateMockData();

  const renderItem = ({ item, index, active }: CarouselItemRenderProps) => {
    return (
      <div
        data-testid="carousel-item"
        key={`carousel-item-${index}`}
        className={`carousel-item${active ? ' active' : ''}`}
      >
        <Image src={item.image} alt={item.title} />
      </div>
    );
  };

  const onItemSelect = jest.fn();

  it('renders without crashing', () => {
    render(
      <Carousel
        loading={false}
        items={items}
        itemsToShow={6}
        activeIndex={0}
        renderItem={renderItem}
        onItemSelect={onItemSelect}
      />,
    );
    const carouselItem = screen.getByAltText('Program 2');
    expect(carouselItem).toBeTruthy();
  });

  it('navigates to the next item when right arrow key is pressed', () => {
    const { getByTestId } = render(
      <Carousel
        loading={false}
        items={items}
        itemsToShow={6}
        activeIndex={0}
        renderItem={renderItem}
        onItemSelect={onItemSelect}
      />,
    );
    const carousel = getByTestId('carousel');
    fireEvent.keyDown(carousel, { key: 'ArrowRight' });
    const allItems = screen.getAllByTestId('carousel-item');
    expect(allItems[1].getAttribute('class')?.includes('active')).toBeTruthy();
  });

  it('navigates to the previous item when left arrow key is pressed', () => {
    const { getByTestId } = render(
      <Carousel
        loading={false}
        items={items}
        itemsToShow={6}
        activeIndex={1}
        renderItem={renderItem}
        onItemSelect={onItemSelect}
      />,
    );
    const carousel = getByTestId('carousel');
    fireEvent.keyDown(carousel, { key: 'ArrowLeft' });
    const allItems = screen.getAllByTestId('carousel-item');
    expect(allItems[0].getAttribute('class')?.includes('active')).toBeTruthy();
  });

  it('calls onItemSelect when Enter key is pressed', () => {
    render(
      <Carousel
        loading={false}
        items={items}
        itemsToShow={6}
        activeIndex={0}
        renderItem={renderItem}
        onItemSelect={onItemSelect}
      />,
    );
    const allItems = screen.getAllByTestId('carousel-item');
    fireEvent.keyDown(allItems[0], { key: 'Enter' });
    expect(onItemSelect).toHaveBeenCalledTimes(1);
    expect(onItemSelect).toHaveBeenCalledWith(items[0]);
  });
});
