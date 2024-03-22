import { render } from '@testing-library/react';

import { Home } from '..';
test('renders a button with correct text', () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('home-page')).toBeTruthy();
});
