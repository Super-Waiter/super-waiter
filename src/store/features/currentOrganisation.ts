import {createSlice} from '@reduxjs/toolkit';
import {Organisation} from '../../model';

const organisation: Organisation = {
  name: '',
  contactPhone: '',
  email: '',
  subscriptionId: '',
  owner: '',
  users: [],
  id: '',
  client: '',
};

const currentOrganisationSlice = createSlice({
  name: 'currentOrganisation',
  initialState: organisation,
  reducers: {
    setCurrentOrganisation: (_, action) => {
      return action.payload;
    },
    clearCurrentOrganisation: () => organisation,
  },
});

export const CurrentOrganisationActions = currentOrganisationSlice.actions;

export default currentOrganisationSlice.reducer;
