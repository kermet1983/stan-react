import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../Header';

describe('Component: Header', () => {
  test('renders header layout', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );
    expect(getByTestId('header-layout')).toBeTruthy();
  });

  test('renders header logo with alt text', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );
    const headerLogo = getByTestId('header-logo');
    expect(headerLogo).toBeTruthy();
    expect(headerLogo.getAttribute('alt')).toEqual('Stan');
  });

  test('renders header navigation', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );
    const headerLogo = getByTestId('header-navigation');
    expect(headerLogo).toBeTruthy();
  });
});
