import {createSlice} from '@reduxjs/toolkit';
import {CLIENT_STATUS, Client} from '../../model';

const initialState: Client = {
  waiter: '',
  room: '',
  status: CLIENT_STATUS.UNACTIVE,
  organisation: '',
};

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClient: (_, action) => {
      return action.payload;
    },

    reset: () => initialState,
  },
});

export const ClientActions = clientSlice.actions;

export default clientSlice.reducer;
