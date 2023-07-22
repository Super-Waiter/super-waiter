import axios from 'axios';
import {BASE_URL_API} from '../utils/api';
import {Room} from '../model/';

export const getRoomsByOrganisation = async (id: string) => {
  try {
    const res = await axios.get(
      `${BASE_URL_API}/room/getRoomsByOrganisation/${id}`,
    );

    return {ok: true, rooms: res.data as Room[]};
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      allRooms: [] as Room[],
    };
  }
};

export const bookRoomById = async (room: Room) => {
  try {
    const res = await axios.post(`${BASE_URL_API}/room/bookRoomById`, room);

    return {ok: true, bookedRoom: res.data as Room};
  } catch (error) {
    console.log(error);
    return {ok: false, bookedRoom: {} as Room};
  }
};
