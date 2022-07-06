export const initialState = {
  priceHighToLow: false,
  priceLowToHigh: false,
  products: [],
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS":
      return {
        ...state,
        priceHighToLow: false,
        priceLowToHigh: false,
        products: action.payload,
      };

    case "HIGH_TO_LOW":
      return {
        ...state,
        priceHighToLow: true,
        priceLowToHigh: false,
        products: state.products.sort((a, b) => (a.price > b.price ? -1 : 1)),
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        priceHighToLow: false,
        priceLowToHigh: true,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };

    case "RESET":
      return action.payload;

    default:
      return {
        ...state,
        products: action.payload,
      };
  }
};
