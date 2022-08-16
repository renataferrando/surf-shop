import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import schema from "./createProduct/newProductSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApiContext } from "../context/apiContext";
import { createProduct } from "../service/createProduct";

import "./_admin-dashboard.scss";
import axios from "axios";

const AdminDashboard = () => {
  const [state, dispatch] = useContext(ApiContext);

  const [formValue, setformValue] = useState({
    productName: "",
    price: "",
    brand: "",
    description: "",
    countInStock: "",
    size: "",
    category: "",
    gender: "",
    firstImage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // axios.post("/api/products", productName).then(console.log("hl"));
    const formData = new FormData();
    console.log(formData);

    formData.append("productName", formValue.productName);
    // formData.append("price", formValue.price);
    // formData.append("brand", formValue.brand);
    // formData.append("description", formValue.description);
    // formData.append("countInStock", formValue.countInStock);
    // formData.append("size", formValue.size);
    // formData.append("category", formValue.category);
    // formData.append("gender", formValue.gender);
    formData.append("firstImage", formValue.firstImage);
    try {
      const response = await axios.post("/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="admin-dashboard">
      <form
        enctype="multipart/form-data"
        method="post"
        action=""
        onSubmit={handleSubmit}
      >
        <label htmlFor="">Name</label>
        <input
          value={formValue.productName}
          type="text"
          name="productName"
          onChange={handleChange}
          // {...register("productName")}
        />
        <label htmlFor="">Brand</label>
        <input
          value={formValue.brand}
          type="text"
          name="brand"
          onChange={handleChange}
          // {...register("brand")}
        />
        <label htmlFor="">Description</label>
        <input
          value={formValue.description}
          type="text"
          name="description"
          onChange={handleChange}
          // {...register("description")}
        />
        <label htmlFor="">Category</label>
        <input
          value={formValue.category}
          type="text"
          name="category"
          onChange={handleChange}
          // {...register("category")}
        />
        <label htmlFor="">Price</label>
        <input
          value={formValue.price}
          type="number"
          name="price"
          onChange={handleChange}
          // {...register("price")}
        />
        <label htmlFor="">Gender</label>
        <input
          value={formValue.gender}
          type="number"
          name="gender"
          onChange={handleChange}
          // {...register("gender")}
        />
        <label htmlFor="">Size</label>
        <input
          value={formValue.size}
          type="number"
          name="size"
          onChange={handleChange}
          // {...register("size")}
        />
        <label htmlFor="">Stock</label>
        <input
          type="number"
          name="countInStock"
          onChange={handleChange}
          value={formValue.countInStock}
          // {...register("countInStock")}
        />
        <label htmlFor="">Image</label>
        <input
          value={formValue.firstImage}
          type="file"
          name="firstImage"
          onChange={handleChange}
          // {...register("firstImage")}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
