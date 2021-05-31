import { createAction, createSlice } from '@reduxjs/toolkit';

const uploadBrandPhoto = createAction('brands/uploadBrandPhoto');

const brandsReducer = createSlice({
  name: 'brands',
  initialState: {
    93282973: {
      id: '93282973',
      name: 'Fibre Limiteds',
      email: 'brand@mail.com',
      symbol: 'FLX',
      loyaltyPoints: 50000,
      totalAwardedPoints: 0,
      logo: 'https://wewiej',
      followers: {},
    },
    kjnr49384n: {
      id: 'kjnr49384n',
      name: 'KeyStone Bank',
      email: 'keystone@mail.com',
      symbol: 'KST',
      totalAwardedPoints: 0,
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
    awardPoints: (state, action) => {
      const { brandId, amount } = action.payload;
      state[brandId].loyaltyPoints -= amount;
      state[brandId].totalAwardedPoints += amount;
    },
    uploadBrandPhotoSuccessful: (state, action) => {
      const { imageData, brandId } = action.payload;
      state[brandId].logo = imageData.url;
    },
  },
});

export const brandActions = { ...brandsReducer.actions, uploadBrandPhoto };
export default brandsReducer.reducer;
