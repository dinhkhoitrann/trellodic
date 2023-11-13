import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../services/auth/auth';
import { User } from '@/types/user.type';
import { RootState } from '../store';
import { userApi } from '../services/user/user';

const initialState: {
  profile: User | null;
} = {
  profile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      const {
        data: { user },
      } = action.payload;
      if (user) {
        state.profile = user;
      }
    });
    builders.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, action) => {
      const { user } = action.payload;
      if (user) {
        state.profile = user;
      }
    });
    builders.addMatcher(authApi.endpoints.loginWithGoogle.matchFulfilled, (state, action) => {
      const {
        data: { user },
      } = action.payload;
      if (user) {
        state.profile = user;
      }
    });
  },
});

export default userSlice.reducer;

export const selectUserProfile = (state: RootState) => state.user.profile;
