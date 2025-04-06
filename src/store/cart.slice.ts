import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  cout: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) {
        state.items.push({ id: action.payload, cout: 1 });
        return;
      }
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.cout++;
        }
        return i;
      });
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
