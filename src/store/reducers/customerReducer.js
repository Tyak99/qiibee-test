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
      loyaltyPoints: {
        93282973: 100,
      },
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
});

export const customerActions = customersReducer.actions;
export default customersReducer.reducer;
