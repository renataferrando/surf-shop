import axios from "axios";
import { useEffect, useState } from "react";
import { ApiContext } from "../context/apiContext";
import { useContext } from "react";

export function useAccesories() {
  const [state, dispatch, searchParams, setSearchParams] =
    useContext(ApiContext);
  const [accesories, setAccesories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAccesories = () => {
    setLoading(true);
    return axios
      .get("/api/categories/accesories", { params: searchParams })
      .then((res) => {
        console.log(res.data);
        setAccesories(res.data);
        setLoading(false);
        dispatch({
          type: "PRODUCTS",
          payload: res.data,
        });
      });
  };
  useEffect(() => {
    getAccesories();
  }, [searchParams]);
  return {
    getAccesories,
    accesories,
    loading,
    searchParams,
    setSearchParams,
  };
}
