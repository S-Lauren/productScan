import * as React from 'react';


const useFetch = (url: string, options: Object = {}) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [list, setList] = React.useState<any[]>([]);


  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json.product);
        setList(json.products.slice())
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [list]);
  return { data, error, isLoading, list };
};

export default useFetch;