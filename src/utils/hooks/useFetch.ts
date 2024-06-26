import { useEffect, useState } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface FetchProps {
  url: string;
  shouldFetch?: boolean;
}

const useFetch = <T>({ url, shouldFetch = true }: FetchProps): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      if (!shouldFetch) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort(); // Cancel request if component unmounts before fetch completes
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
