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
      followers: {
        jrneier: {
          id: 'jrneier',
          email: 'tunde@mail.com',
          name: 'Tunde Nasri',
        },
      },
    },
    kjnr49384n: {
      id: 'kjnr49384n',
      name: 'KeyStone Bank',
      email: 'keystone@mail.com',
      symbol: 'KST',
      loyaltyPoints: 700,
      logo: 'https://wewiej',
      followers: {},
    },
  },
  reducers: {
    createBrand: (state, action) => {
      const { id } = action.payload;
      state[id] = action.payload;
    },
    followBrand: (state, action) => {
      const { brandId, userData } = action.payload;
      state[brandId].followers[userData.id] = userData;
    },
  },
});

export const brandActions = brandsReducer.actions;
export default brandsReducer.reducer;
