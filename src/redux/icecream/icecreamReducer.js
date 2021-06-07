import { BUY_ICECREAM } from "../icecream/icecreamType";

const initialState = {
  numberOfIcecream: 20,
};

export const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - 1,
      };

    default:
      return state;
  }
};
