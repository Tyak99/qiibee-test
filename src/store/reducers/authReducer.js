import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    id: null,
    isAuthenticated: false,
    isBrand: null,
  },
});

export default authReducer.reducer;
