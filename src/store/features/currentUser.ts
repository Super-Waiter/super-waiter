import {createSlice} from '@reduxjs/toolkit';
import {ROLE, User} from '../../model';

const initialState: User = {
  firstName: '',
  lastName: '',
  rooms: [],
  organisation: '',
  role: ROLE.ADMIN,
  email: '',
  phone: '',
};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (_, action) => {
      return action.payload;
    },
    reset: () => initialState,
  },
});

export const CurrentUserActions = currentUserSlice.actions;

export default currentUserSlice.reducer;
