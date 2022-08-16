import axios from "axios";

export const getWetsuits = () => {
  return axios
    .get("/api/categories/wetsuits")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
