import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Image from '../Image';

describe('<Image />', () => {
  it('renders loading state initially', () => {
    render(<Image src="example.jpg" alt="Example" renderLoading={() => <div data-testid="loading-image"></div>} />);
    expect(screen.getByTestId('loading-image')).toBeTruthy();
  });

  it('renders image when loaded successfully', async () => {
    render(<Image src="example.jpg" alt="Example" />);
    // Simulate image load
    await screen.findByAltText('Example');
    expect(screen.queryByTestId('loading-image')).toBeNull();
    expect(screen.getByAltText('Example')).toBeTruthy();
  });
});
