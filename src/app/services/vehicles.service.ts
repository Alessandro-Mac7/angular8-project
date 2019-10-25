import {Injectable} from '@angular/core';
import {IVehicle} from '../interfaces/IVehicle';

@Injectable()
export class VehiclesService {

  getVehicles() {}

  getVehicle( id: number ) {}

  updateVehicle( id: number ) {}

  createVehicle( vehicle: IVehicle ) {}

  deleteVehicle( id: number ) {}

}
