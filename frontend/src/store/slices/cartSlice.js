import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async () => {
    const response = await axios.get('http://localhost:3002/cart');
    return response.data;
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (productId) => {
    const response = await axios.post('http://localhost:3002/cart', { productId });
    return response.data;
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (itemId) => {
    const response = await axios.delete(`http://localhost:3002/cart/${itemId}`);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
    error: null,
    total: 0
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.total = action.payload.reduce((sum, item) => sum + item.price * item.quantity, 0);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      });
  }
});

export const selectCart = (state) => state.cart;
export const selectCartLoading = (state) => state.cart.loading;
export const selectCartError = (state) => state.cart.error;
export const selectCartTotal = (state) => state.cart.total;

export default cartSlice.reducer;
