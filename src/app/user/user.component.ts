import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {User} from '../interfaces/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }
}
