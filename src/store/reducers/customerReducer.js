import { createSlice } from '@reduxjs/toolkit';

const customersReducer = createSlice({
  name: 'customers',
  initialState: {
    jrneier: {
      id: 'jrneier',
      firstName: 'Tunde',
      lastName: 'Nasri',
      email: 'tunde@mail.com',
      followedBrands: 0,
      loyaltyPoints: {},
    },
  },
  reducers: {
    createCustomer: (state, action) => {
      state.push(action.payload);
    },
    redeemPoints: (state, action) => {
      const { customerId, amount, brandId } = action.payload;
      state[customerId].loyaltyPoints[brandId] -= amount;
    },
  },
  extraReducers: (builder) => {
    builder.addCase('brands/followBrand', (state, action) => {
      const { userData, brandId } = action.payload;
      state[userData.id].followedBrands += 1;
      state[userData.id].loyaltyPoints[brandId] = 0;
    });
    builder.addCase('brands/awardPoints', (state, action) => {
      const { customerId, brandId, amount } = action.payload;
      state[customerId].loyaltyPoints[brandId] += amount;
    });
  },
});

export const customerActions = customersReducer.actions;
export default customersReducer.reducer;
