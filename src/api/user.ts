import {User} from '../model';
import axios from 'axios';

import {BASE_URL_API} from '../utils/api';

export const getUserByEmail = async (email: string) => {
  try {
    const res = await axios.get(`${BASE_URL_API}/user/getUserByEmail/${email}`);

    return {ok: true, user: res.data as User};
  } catch (error) {
    console.log(error);
    return {ok: false, user: {} as User};
  }
};
