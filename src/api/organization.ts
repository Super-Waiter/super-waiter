import axios from 'axios';
import {BASE_URL_API} from '../utils/api';
import {Organisation} from '../model';

export const getOrganisationById = async (id: string) => {
  try {
    const res = await axios.get(
      `${BASE_URL_API}/organisation/getOrganisationById/${id}`,
    );

    return {ok: true, organisation: res.data as Organisation};
  } catch (error) {
    console.log(error);
    return {ok: false, organisation: {} as Organisation};
  }
};
