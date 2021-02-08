import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
  CHANGE_CATEGORY,
} from './productsTypes';

const initState = {
  items: [],
  filteredItems: [],
  size: '',
  sort: '',
  currentCategorie: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return { ...state, currentCategorie: action.payload };
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };
    default:
      return state;
  }
}
