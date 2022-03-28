import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {});
        setData(response.data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    return;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
