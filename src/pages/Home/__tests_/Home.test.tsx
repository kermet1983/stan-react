import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../';
import { generateMockData } from '@/__mocks__/programs.mock';
import { size, Sizes } from '@/utils/breakpoints';

const fakeItems: number[] = Array.from(Array(10).keys());
// Mock the useFetch/useScreenSize hook
jest.mock('@/utils/hooks', () => ({
  useFetch: jest.fn(() => ({
    data: generateMockData(),
    loading: false,
    error: null,
  })),
  useScreenSize: jest.fn(() => Sizes.xl),
}));

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Component: Home', () => {
  test('renders carousel items with correct data of 6 items on xl+ screen size', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );

    act(() => {
      // Set the innerWidth to match the 'xl' breakpoint
      window.innerWidth = 1440;
      window.dispatchEvent(new Event('resize'));
    });

    // not loading
    expect(screen.queryByTestId('carousel-item-loading')).toBeNull();
    // max items to show in DOM
    expect(screen.getAllByTestId('carousel-item')).toHaveLength(6);
    // ensure 6 images exist
    expect(screen.getAllByTestId('carousel-item-image')).toHaveLength(6);
  });

  test('renders carousel items with correct data', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );

    act(() => {
      // Set the innerWidth to match the 'xl' breakpoint
      window.innerWidth = size.xl;
      window.dispatchEvent(new Event('resize'));
    });

    // not loading
    expect(screen.queryByTestId('carousel-item-loading')).toBeNull();
    // max items to show in DOM
    expect(screen.getAllByTestId('carousel-item')).toHaveLength(6);
    // ensure 6 images exist
    expect(screen.getAllByTestId('carousel-item-image')).toHaveLength(6);

    act(() => {
      // Set the innerWidth to match the 'lg' breakpoint
      window.innerWidth = size.lg;
      window.dispatchEvent(new Event('resize'));
    });

    // max items to show in DOM
    expect(screen.getAllByTestId('carousel-item')).toHaveLength(5);

    act(() => {
      // Set the innerWidth to match the 'md' breakpoint
      window.innerWidth = size.md;
      window.dispatchEvent(new Event('resize'));
    });

    // max items to show in DOM
    expect(screen.getAllByTestId('carousel-item')).toHaveLength(4);

    act(() => {
      // Set the innerWidth to match the 'sm' breakpoint
      window.innerWidth = size.sm;
      window.dispatchEvent(new Event('resize'));
    });

    // max items to show in DOM
    expect(screen.getAllByTestId('carousel-item')).toHaveLength(3);
  });
});
