import * as yup from "yup";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^([^0-9]*)$/, "Firstname should not contain numbers")
    .required("Firstname is required"),
  lastname: yup
    .string()
    .matches(/^([^0-9]*)$/, "Lastname should not contain numbers")
    .required("Lastname is required"),
  birth: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Please enter your date of birth"),
  address: yup.string().required("Address is required"),
  city: yup
    .string()
    .matches(/^([^0-9]*)$/, "City should not contain numbers")
    .required("City is required"),
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
  terms: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
});

export default schema;
