import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Home from '../';

const fakeItems: number[] = Array.from(Array(10).keys());
// Mock the useFetch hook
jest.mock('@/utils/hooks', () => ({
  useFetch: jest.fn(() => ({
    data: fakeItems.map((item) => ({ id: item, image: `image${item}.jpg`, title: `Title ${item}` })),
    loading: false,
    error: null,
  })),
}));

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Component: Home', () => {
  test('renders carousel items with correct data', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );

    // not loading
    expect(screen.queryByTestId('carousel-item-loading')).toBeNull();
    // max items to show in DOM
    expect(screen.getAllByTestId('carousel-item')).toHaveLength(6);
    // ensure 6 images exist
    expect(screen.getAllByTestId('carousel-item-image')).toHaveLength(6);
  });
});
