import { createSlice } from '@reduxjs/toolkit';

const customersReducer = createSlice({
  name: 'customers',
  initialState: [
    {
      id: 'jrneier',
      firstName: 'Tunde',
      lastName: 'Nasri',
      email: 'tundenasri@gmail.com',
      totalLoyaltyPoints: 0,
      followedBrand: 0,
    },
  ],
  createCustomer: (state, action) => {
    state.push(action.payload);
  },
});

export const customerActions = customersReducer.actions;
export default customersReducer.reducer;
