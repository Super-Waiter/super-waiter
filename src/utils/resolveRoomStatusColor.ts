import {ROOM_STATUS} from '../model';
import {Colors} from '../style';

export const resolveRoomStatusColor = (status: ROOM_STATUS) => {
  if (status === ROOM_STATUS.BOOKED) {
    return Colors.Yellow;
  }

  if (status === ROOM_STATUS.BUSY) {
    return Colors.Primary;
  }

  if (status === ROOM_STATUS.CALLING) {
    return Colors.Red;
  }

  return Colors.Grey;
};
