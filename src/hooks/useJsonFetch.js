import { useEffect, useState, useRef } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const timestampRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setLoading(true);
      try {
        const response = await fetch(`${url}/${opts}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        if (timestampRef.current === timestamp) {
          const result = await response.json();
          setData(result.status);
          setError(null);
        }
      } catch (e) {
        setError({
          name: e.name === 'SyntaxError' ? 'Data parse issue' : e.name,
          message: e.message
        })
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, opts]);
  return [ { data, loading, error } ];
}
