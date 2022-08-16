import axios from "axios";

export const getAccesories = (params) => {
  return axios
    .get("/api/categories/accesories", { params })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

// import { useContext, useEffect } from "react";
// import { ApiContext } from "../context/apiContext";
// import axios from "axios";

// export default function GetAccesories(params) {
//   const [state, dispatch] = useContext(ApiContext);

//   useEffect(() => {
//     axios
//       .get("/api/categories/accesories", { params })
//       .then((response) => {
//         dispatch({
//           type: "GET_ACCESORIES_SUCCESS",
//           payload: { data: response.data },
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: "GET_ACCESORIES_FAILURE",
//           payload: { error: error.message },
//         });
//       });
//   }, [params]);
//   useEffect(() => {
//     axios
//       .get("/api/categories/accesories")
//       .then((response) => {
//         dispatch({
//           type: "GET_ACCESORIES_BRANDS",
//           payload: response.data
//             .map((item) => item.brand)
//             .reduce(
//               (acc, sub) => (acc.includes(sub) ? acc : [...acc, sub]),
//               []
//             ),
//         });
//         dispatch({
//           type: "GET_ACCESORIES_SUBCATEGORIES",
//           payload: response.data
//             .map((item) => item.subcategory)
//             .reduce(
//               (acc, sub) => (acc.includes(sub) ? acc : [...acc, sub]),
//               []
//             ),
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
// }
