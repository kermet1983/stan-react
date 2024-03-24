import { act, renderHook } from '@testing-library/react';
import useFetch from '../useFetch'; // Adjust the import path as needed

describe('useFetch', () => {
  global.fetch = jest.fn().mockResolvedValueOnce({
    ok: true,
    json: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ foo: 'bar' });
        }, 1000);
      }),
  });
  it('should return loading state initially', async () => {
    let res: any = {};
    act(() => {
      const { result } = renderHook(() => useFetch({ url: 'path/to/api' }));
      res = result;
    });
    act(() => {
      expect(res?.current?.loading).toBe(true);
      expect(res?.current?.error).toBe(null);
      expect(res?.current?.data).toBe(null);
    });
  });

  it('should fetch data correctly', async () => {
    // Mock successful fetch response
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ foo: 'bar' }),
    });

    let res: any = {};
    await act(async () => {
      const { result, rerender } = renderHook(() => useFetch({ url: 'path/to/api' }));
      res = result;
    });

    act(() => {
      expect(res.current.loading).toBe(false);
      expect(res.current.error).toBe(null);
      expect(res.current.data).toEqual({ foo: 'bar' });
    });
  });

  it('should handle fetch error', async () => {
    // Mock fetch response with error
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Failed to fetch data'));

    let res: any = {};
    await act(async () => {
      const { result, rerender } = renderHook(() => useFetch({ url: 'path/to/api' }));
      res = result;
    });
    act(() => {
      expect(res.current.loading).toBe(false);
      expect(res.current.error).toEqual(new Error('Failed to fetch data'));
      expect(res.current.data).toBe(null);
    });
  });
});
