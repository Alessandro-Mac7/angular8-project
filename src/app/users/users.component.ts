import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../classes/User';
import {Router} from '@angular/router';
import {IButton} from '../interfaces/IButton';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;
  title = 'Table customer';
  users: Array<User> = [];
  @Output('updateUser') userSelected = new EventEmitter<User>();

  source: Array<any> = [
    {
      name: 'Alessandro',
      lastName: 'Macrì',
      date: '13/06/95',
    }, {
      name: 'Alessandro',
      lastName: 'Macrì',
      date: '13/06/95',
    }, {
      name: 'Alessandro',
      lastName: 'Macrì',
      date: '13/06/95',
    }, {
      name: 'Alessandro',
      lastName: 'Macrì',
      date: '13/06/95',
    }, {
      name: 'Alessandro',
      lastName: 'Macrì',
      date: '13/06/95',
    }];
  header: Array<{ key: string, value: string }> = [
    {
      key: 'name',
      value: 'Nome'
    },  {
      key: 'lastName',
      value: 'Cognome'
    }, {
      key: 'date',
      value: 'Data'
    }, {
      key: 'action',
      value: ' '
    }];

  config: Array<IButton> = [{
    type: 'button',
    class: 'btn btn-info btn-sm',
    label: '',
    icon: 'book',
    tooltip: 'prenotazioni'
  }, {
    type: 'button',
    class: 'btn btn-warning btn-sm ml-1',
    label: '',
    icon: 'pencil',
    tooltip: 'modifica'
  }, {
    type: 'button',
    class: 'btn btn-danger btn-sm ml-1',
    label: '',
    icon: 'trash-o',
    tooltip: 'elimina'
  }];

  constructor(private service: UsersService, private router: Router) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      data => this.users = data as Array<User>
    );

  }

  onDeleteUser(user: User) {
    const confirmDelete = confirm('Vuoi veramente eliminare ' + user.name + '?');
    if (confirmDelete) {
      this.service.delete(user.id).subscribe(
        response => {
          const index = this.users.indexOf(user);
          this.users.splice(index, 1);
        }
      );
    }
  }

  onSelectedUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.userSelected.emit(userCopy);
  }

}
