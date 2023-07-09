export type FontWeight = 'regular' | 'semibold' | 'bold';

export enum FOOD_STATUS {
  IN_STOCK = 'In Stock',
  OUT_OF_STOCK = 'Out of Stock',
}

export type Food = {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: number;
  status: FOOD_STATUS;
};

export enum ROOM_STATUS {
  CALLING = 0,
  BUSY = 1,
  BOOKED = 2,
  EMPTY = 3,
}

export type Room = {
  id: string;
  name: string | number;
  status: ROOM_STATUS;
};

export type User = {
  _id: number | string;
  name?: string;
  avatar?: string;
};

export type IMessage = {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: User;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  quickReplies?: QuickReplies;
};

interface Reply {
  title: string;
  value: string;
  messageId?: any;
}
interface QuickReplies {
  type: 'radio' | 'checkbox';
  values: Reply[];
  keepIt?: boolean;
}
