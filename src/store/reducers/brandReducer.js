import { createSlice } from '@reduxjs/toolkit';

const brandsReducer = createSlice({
  name: 'brands',
  initialState: [
    {
      id: '93282973',
      name: 'Fibre Limiteds',
      email: 'brand@mail.com',
      symbol: 'FLX',
      loyaltyPoints: 50000,
      logo: 'https://wewiej',
      followers: {
        jrneier: {
          id: 'jrneier',
          firstName: 'Tunde',
          lastName: 'Nasri',
          email: 'tundenasri@gmail.com',
        },
      },
    },
  ],
  reducers: {
    createBrand: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const brandActions = brandsReducer.actions;
export default brandsReducer.reducer;
