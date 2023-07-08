import io from 'socket.io-client';
import {BASE_URL} from '../utils/api';

const socket = io(BASE_URL, {
  transports: ['websocket'], // Use WebSocket as the transport
  forceNew: true,
});

export default socket;
