export const initialState = {
  loading: false,
  accesories: [],
  wetsuits: [],
  accesoriesBrands: [],
  accesoriesSubcategories: [],
  error: null,
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ACCESORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        accesories: action.payload,
        error: "",
      };

    case "GET_ACCESORIES_FAILURE":
      return {
        ...state,
        loading: false,
        accesories: [],
        error: action.payload.error,
      };
    case "GET_WETSUITS_SUCCESS":
      return {
        ...state,
        loading: false,
        wetsuits: action.payload,
        error: "",
      };

    case "GET_WETSUITS_FAILURE":
      return {
        ...state,
        loading: false,
        wetsuits: [],
        error: action.payload.error,
      };
    case "GET_ACCESORIES_BRANDS":
      return {
        ...state,
        accesoriesBrands: action.payload,
      };
    case "GET_ACCESORIES_SUBCATEGORIES":
      return {
        ...state,
        accesoriesSubcategories: action.payload,
      };
    case "GET_WETSUITS_BRANDS":
      return {
        ...state,
        wetsuits: action.payload.data,
      };
    default:
      return { ...state };
  }
};
