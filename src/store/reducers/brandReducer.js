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
      // find the brand cus whats to follow
      // add a new entry to the followes list
      const { brandId, userData } = action.payload;
      console.log('🚀 ~ file: brandReducer.js ~ line 24 ~ brandId', brandId);
      state[brandId].followers[userData.id] = userData;
    },
  },
});

export const brandActions = brandsReducer.actions;
export default brandsReducer.reducer;
