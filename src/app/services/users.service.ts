import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';

@Injectable()
export class UsersService {

  users: Array<User> = [
    {
      name: 'Alessandro',
      lastName: 'Macrì',
      email: 'alessandro.macri95@gmail.com',
      date: '13/06/1995'
    }, {
      name: 'Antonio',
      lastName: 'Macrì',
      email: 'antonio.macri95@gmail.com',
      date: '13/06/1995'
    }, {
      name: 'Giuseppe',
      lastName: 'Macrì',
      email: 'giuseppe.macri95@gmail.com',
      date: '13/06/1995'
    }, {
      name: 'Maria',
      lastName: 'Macrì',
      email: 'maria.macri95@gmail.com',
      date: '13/06/1995'
    }
  ];

  getUsers() {
    return this.users;
  }

  deleteUser(user){
    let index = this.users.indexOf(user);
    if(index >= 0){
      this.users.splice(index,1);
    }
  }
}
