import {IUser} from '../interfaces/IUser';

export class User implements IUser {
  static autoID = 8;
  date: string;
  email: string;
  id: number;
  lastName: string;
  name: string;
  password: string;
  typology: number;

  constructor() {
    this.id = undefined;
    this.name = '';
    this.email = '';
    this.date = '';
    this.lastName = '';
    this.password = '';
    this.typology = 2;
  }

  assignId() {
    this.id = User.autoID++;
  }


}
