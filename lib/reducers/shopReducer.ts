import type { CategoryType, FilterType } from "@/types/types";

type ShopState = {
  isOpenSort: boolean;
  isOpenCategory: boolean;
  selectedFilter: FilterType;
  selectedCategory: CategoryType;
};
export type ShopAction =
  | { type: "TOGGLE_SORT" }
  | { type: "TOGGLE_CATEGORY" }
  | { type: "SET_FILTER"; payload: FilterType }
  | { type: "SET_CATEGORY"; payload: CategoryType };

export const initialState: ShopState = {
  isOpenSort: false,
  isOpenCategory: false,
  selectedFilter: "جدیدترین",
  selectedCategory: "All",
};

// define reducer
export function shopReducer(state: ShopState, action: ShopAction): ShopState {
  switch (action.type) {
    case "TOGGLE_SORT":
      return { ...state, isOpenSort: !state.isOpenSort };
    case "TOGGLE_CATEGORY":
      return { ...state, isOpenCategory: !state.isOpenCategory };
    case "SET_FILTER":
      return { ...state, selectedFilter: action.payload, isOpenSort: false };
    case "SET_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
        isOpenCategory: false,
      };

    default:
      return state;
  }
}
