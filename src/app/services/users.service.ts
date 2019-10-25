import {Injectable} from '@angular/core';
import {User} from '../classes/User';
import {IUser} from '../interfaces/IUser';
import {HttpClient} from '@angular/common/http';
import {IServiceREST} from '../interfaces/IServiceREST';

@Injectable()
export class UsersService  implements IServiceREST {

  users: Array<User> = [];
  private apiURL = 'http://localhost:3000/user'

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get (this.apiURL);
  }
  get(id: number) {
    return this.http.get(this.apiURL + '/' + id);
  }
  delete(id: number) {
    return this.http.delete(this.apiURL + '/' + id, {});
  }
  save(model: any) {
    return this.http.post(this.apiURL, model);
  }
  update(model: any) {
    return this.http.put(this.apiURL + '/' + model.id, model);
  }
}
