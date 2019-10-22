import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'Table customer';
  users: Array<User> = []

  constructor(private service: UsersService) {
  }

  ngOnInit() {
    this.users = this.service.getUsers();
  }

  onDeleteUser(user) {
    this.service.deleteUser(user);
  }
}
