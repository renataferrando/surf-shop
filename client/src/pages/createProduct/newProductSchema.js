import * as yup from "yup";

const schema = yup.object().shape({
  productName: yup.string().required("ProductName is required"),
  price: yup.number().required("price is required"),
  brand: yup.string(),
  description: yup.string().required("Description is required"),
  countInStock: yup.number().required("Email is required"),
  size: yup.number().required("size is required"),
  category: yup.string().required("category is required"),
  gender: yup.string().required("gender is required"),
  firstImage: yup.mixed().required("image"),
});

export default schema;
