import axios from "axios";

export const createProduct = async (data) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const response = await axios.post("/api/products", data, config);

  return response;
};
