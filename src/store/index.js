import { configureStore, createSlice } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import brandReducer from './reducers/brandReducer';
import customerReducer from './reducers/customerReducer';

export default configureStore({
  reducer: {
    auth: authReducer,
    customers: customerReducer,
    brands: brandReducer,
  },
});
