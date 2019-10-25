import {IVehicle} from '../interfaces/IVehicle';

export class Vehicle implements IVehicle {
  carRegistration: string;
  category: string;
  id: number;
  manufacturer: string;
  model: string;
  uniqueId: string;
}
