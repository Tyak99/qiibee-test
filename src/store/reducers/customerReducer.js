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
});

export default customersReducer.reducer;
