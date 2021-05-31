import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  isAuthenticated: false,
  userType: null,
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
