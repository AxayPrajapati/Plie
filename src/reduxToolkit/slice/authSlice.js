import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    isLogin: false,
    token: '',
    userData: {},
  },
  reducers: {
    login(state, action) {
      let data = action.payload.data;
      state.token = data.token;
      state.userData = data.user;
      state.isLogin = true;
    },
    logOut(state, action) {
      state.isLogin = false;
      state.token = '';
      state.userData = {};
    },
  },
});

export const {login, logOut} = authSlice.actions;
export default authSlice.reducer;
