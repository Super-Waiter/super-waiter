import io, {Socket} from 'socket.io-client';
import {BASE_URL} from '../utils/api';
import {Client, Room} from '../model';

type CreateRoomEventType = {
  room: string;
  waiter: string;
  // firebaseAuthUid: string;
  organisation: string;
};

type ServerToClientEvents = {
  'user-joined': (userId: string) => void;
  'client-created': (client: Client) => void;
  'qrCode-checked': (userId: string) => void;
  'room-created': (room: Room) => void;
  'room-busy': (id: string) => void;
  'room-empy': (id: string) => void;
  'room-book': (id: string) => void;
  'room-call': (id: string) => void;
  'room-updated': (room: Room) => void;
};

type ClientToServerEvents = {
  'join-user': (userId: string) => void;
  'create-client': (client: Client) => void;
  'create-room': (room: Room) => void;
  'check-qrCode': (data: CreateRoomEventType) => void;
  'busy-room': (id: string) => void;
  'empy-room': (id: string) => void;
  'book-room': (id: string) => void;
  'call-room': (id: string) => void;
  'edit-room': (room: Room) => void;
};

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  BASE_URL,
  {
    transports: ['websocket'], // Use WebSocket as the transport
    forceNew: true,
  },
);

export default socket;
