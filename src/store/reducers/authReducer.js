import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 'jrneier',
  isAuthenticated: true,
  userType: 'customer',
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateUser: (state, action) => {
      const { id, userType } = action.payload;
      state.id = id;
      state.isAuthenticated = true;
      state.userType = userType;
    },
    logOut: () => initialState,
  },
});

export const authActions = authReducer.actions;
export default authReducer.reducer;
