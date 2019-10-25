import {IBooking} from '../interfaces/IBooking';

export class Booking implements IBooking {
  endDate: string;
  id: number;
  startDate: string;
  user: number;
  vehicle: number;
}
