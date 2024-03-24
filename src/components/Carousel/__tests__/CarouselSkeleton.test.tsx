import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarouselSkeleton, CarouselSkeletons } from '../CarouselSkeleton';

describe('Component: CarouselSkeleton', () => {
  it('renders correctly', () => {
    render(<CarouselSkeleton index={1} />);
    expect(screen.getAllByTestId('carousel-item-loading')).toHaveLength(1);
    expect(screen.getByTestId('styled-skeleton')).toBeTruthy();
  });
});

describe('Component: CarouselSkeletons', () => {
  it('renders correct number of skeletons', () => {
    render(<CarouselSkeletons itemsToShow={3} />);
    expect(screen.getAllByTestId('carousel-item-loading')).toHaveLength(3);
  });
});
