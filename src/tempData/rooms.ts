import {Room, ROOM_STATUS} from '../model';

export const tempRoomData: Room[] = [
  {
    id: '1',
    name: 1,
    status: ROOM_STATUS.EMPTY,
  },
  {
    id: '3',
    name: 3,
    status: ROOM_STATUS.BUSY,
  },
  {
    id: '4',
    name: 4,
    status: ROOM_STATUS.CALLING,
  },
  {
    id: '2',
    name: 2,
    status: ROOM_STATUS.BOOKED,
  },
  {
    id: '5',
    name: 5,
    status: ROOM_STATUS.BUSY,
  },
  {
    id: '6',
    name: 6,
    status: ROOM_STATUS.EMPTY,
  },
  {
    id: '8',
    name: 8,
    status: ROOM_STATUS.BOOKED,
  },
  {
    id: '10',
    name: 10,
    status: ROOM_STATUS.EMPTY,
  },
  {
    id: '11',
    name: 11,
    status: ROOM_STATUS.CALLING,
  },
];
