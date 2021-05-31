import { createSlice } from '@reduxjs/toolkit';

const brandsReducer = createSlice({
  name: 'brands',
  initialState: {
    93282973: {
      id: '93282973',
      name: 'Fibre Limiteds',
      email: 'brand@mail.com',
      symbol: 'FLX',
      loyaltyPoints: 50000,
      logo: 'https://wewiej',
      followers: {},
    },
  },
  reducers: {
    createBrand: (state, action) => {
      state.push(action.payload);
    },
    followBrand: (state, action) => {
      const { brandId, userData } = action.payload;
      state[brandId].followers[userData.id] = userData;
    },
  },
});

export const brandActions = brandsReducer.actions;
export default brandsReducer.reducer;
