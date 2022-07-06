import axios from "axios";
import { ApiContext } from "../context/apiContext";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
export function useFiltered() {
  const [state, dispatch] = useContext(ApiContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const getFilteredProducts = () => {
    return axios
      .get("/api/search/query", { params: searchParams })
      .then((res) => {
        console.log(res.data);

        dispatch({
          type: "PRODUCTS",
          payload: res.data,
        });
      });
  };

  return {
    getFilteredProducts,
    searchParams,
    setSearchParams,
  };
}
