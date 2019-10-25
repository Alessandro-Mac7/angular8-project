import {Injectable} from '@angular/core';
import {IVehicle} from '../interfaces/IVehicle';

@Injectable()
export class BookingsService {

  getBookings() {}

  getBooking( id: number ) {}

  getBookingCustomer( user: number ) {}

  updateBooking( id: number ) {}

  createBooking( vehicle: IVehicle ) {}

  deleteBooking( id: number ) {}
}
