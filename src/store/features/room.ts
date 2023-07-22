import {createSlice} from '@reduxjs/toolkit';
import {ROOM_STATUS, Room} from '../../model';

interface Props {
  rooms: Room[];
}

const initialState: Props = {
  rooms: [],
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    getAllRooms: (state, action) => {
      const rooms = action.payload as Room[];
      if (rooms.length) {
        const sortedRoomsByStatus = rooms.sort((a, b) => a.status - b.status);
        state.rooms = sortedRoomsByStatus;
      }
    },
    deleteRoomById: (state, action) => {
      state.rooms = state.rooms.filter(room => room.id !== action.payload);
    },
    addRoom: (state, action) => {
      state.rooms = [...state.rooms, action.payload];
    },
    bookRoom: (state, action) => {
      const updatedRooms = state.rooms.map(room => {
        if (room.id === action.payload) {
          room.status = ROOM_STATUS.BOOKED;
        }

        return room;
      });

      state.rooms = updatedRooms;
    },
    busyRoom: (state, action) => {
      const updatedRooms = state.rooms.map(room => {
        if (room.id === action.payload) {
          room.status = ROOM_STATUS.BUSY;
        }

        return room;
      });

      state.rooms = updatedRooms;
    },
    callRoom: (state, action) => {
      const updatedRooms = state.rooms.map(room => {
        if (room.id === action.payload) {
          room.status = ROOM_STATUS.CALLING;
        }

        return room;
      });

      state.rooms = updatedRooms;
    },
    emptyRoom: (state, action) => {
      const updatedRooms = state.rooms.map(room => {
        if (room.id === action.payload) {
          room.status = ROOM_STATUS.EMPTY;
        }

        return room;
      });

      state.rooms = updatedRooms;
    },
  },
});

export const RoomActions = roomSlice.actions;

export default roomSlice.reducer;
