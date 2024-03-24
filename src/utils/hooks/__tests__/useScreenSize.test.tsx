import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useScreenSize from '../useScreenSize';

describe('useScreenSize', () => {
  it('should return correct screen size category', () => {
    // Mock window.innerWidth
    const originalInnerWidth = window.innerWidth;
    // Set the innerWidth to match the 'sm' breakpoint
    window.innerWidth = 600;

    let res: any = {};
    act(() => {
      const { result } = renderHook(() => useScreenSize());
      res = result;
    });

    // Check if the initial screen size category is 'sm'
    expect(res.current).toBe('sm');

    act(() => {
      // Set the innerWidth to match the 'md' breakpoint
      window.innerWidth = 900;
      window.dispatchEvent(new Event('resize'));
    });

    expect(res.current).toBe('md');

    // Reset window.innerWidth to its original value
    window.innerWidth = originalInnerWidth;
  });
});
