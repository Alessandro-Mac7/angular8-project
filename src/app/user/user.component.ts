import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {User} from '../classes/User';
import {Router} from '@angular/router';
import {IButton} from '../interfaces/IButton';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectedUser') userSelected = new EventEmitter();
  bookingButton: IButton = {
    type: 'button',
    class: 'btn btn-info btn-sm',
    label: '',
    icon: 'book',
    tooltip: 'prenotazioni'
  };
  updateButton: IButton = {
    type: 'button',
    class: 'btn btn-warning btn-sm ml-1',
    label: '',
    icon: 'pencil',
    tooltip: 'modifica'
  };
  deleteButton: IButton = {
    type: 'button',
    class: 'btn btn-danger btn-sm ml-1',
    label: '',
    icon: 'trash-o',
    tooltip: 'elimina'
  };

  constructor(private route: Router ) { }

  ngOnInit() {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    this.route.navigate(['users', 'edit', this.user.id]);
    // this.userSelected.emit(this.user);
  }
}
