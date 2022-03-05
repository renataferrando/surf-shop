import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have a correct format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Please set your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Minimum eight characters, at least one letter and one number"
    ),
});

export default loginSchema;
