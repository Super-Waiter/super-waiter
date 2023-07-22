export type FontWeight = 'regular' | 'semibold' | 'bold';

export enum ROLE {
  ADMIN = 'Admin',
  WAITER = 'Waiter',
}

// export type Client = {
//   id?: string;
//   waiter: string;
//   room: string;
//   firebaseAuthId: string;
// };

export type User = {
  id?: string;
  firstName: string;
  lastName: string;
  rooms: Room[];
  organisation: string;
  role: ROLE;
  email: string;
  phone: string;
  client?: string;
};

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
  id?: string;
  name: string | number;
  status: ROOM_STATUS;
  organisation: string;
  client?: string;
};

export type Organisation = {
  id: string;
  name: string;
  contactPhone: string;
  email: string;
  subscriptionId: string;
  owner: string;
  client?: string;
  users: User[];
};

export enum CLIENT_STATUS {
  ACTIVE = 0,
  UNACTIVE = 1,
}

export type Client = {
  id?: string;
  waiter: string;
  room: string;
  status: CLIENT_STATUS;
  organisation: string;
};

export enum SIGNIN_TYPE {
  'WAITER',
  'CLIENT',
  'UNSIGNED',
}
