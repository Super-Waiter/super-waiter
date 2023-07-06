import {ROOM_STATUS} from '../model';
import {Colors} from '../style';

export const resolvRoomStatuseColor = (status: ROOM_STATUS) => {
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
