import * as React from 'react';
import { ProductListProps } from '../screens/ProductListScreen';


const useFetch = (url: string, options: Object = {}) => {
  const [data, setData] = React.useState<ProductListProps | null>(null);
  const [error, setError] = React.useState(null);
  const [list, setList] = React.useState<any[]>([]);


  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (isMounted) {
          setData(json.product);
          setList(json.products.slice())
          setIsLoading(false)
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    return () => { isMounted = false };
  }, [list]);
  return { data, error, isLoading, list };
};

export default useFetch;