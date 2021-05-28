import { configureStore, createSlice } from '@reduxjs/toolkit';

const usersReducer = createSlice({
  name: 'users',
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
}).reducer;

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    id: null,
    isAuthenticated: false,
  },
}).reducer;

const brandsReducer = createSlice({
  name: 'brands',
  initialState: [
    {
      id: '93282973',
      name: 'Fibre Limited',
      symbol: 'FLX',
      loyaltyPoints: 50000,
      logo: 'https://wewiej',
      followers: [
        {
          id: 'jrneier',
          firstName: 'Tunde',
          lastName: 'Nasri',
          email: 'tundenasri@gmail.com',
        },
      ],
    },
  ],
}).reducer;

export default configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    brands: brandsReducer,
  },
});
