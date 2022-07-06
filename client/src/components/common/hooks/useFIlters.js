import { useEffect, useState, useContext } from "react";
import GetFiltered from "../../../service/filteredData";

function useFilters(params) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    GetFiltered(params)
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, []);

  return {
    response,
  };
}

export default useFilters;
