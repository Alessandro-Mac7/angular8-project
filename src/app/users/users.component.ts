import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../classes/User';
import {Router} from '@angular/router';
import {Action, IActionButton} from '../interfaces/IActionButton';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;
  title = 'Table customer';
  users: Array<User>;
  @Output('updateUser') userSelected = new EventEmitter<User>();

  source: Array<any>;
  header: Array<{ key: string, value: string }> = [
    {
      key: 'name',
      value: 'Nome'
    },  {
      key: 'lastName',
      value: 'Cognome'
    }, {
      key: 'email',
      value: 'Email'
    }, {
      key: 'date',
      value: 'Data'
    }, {
      key: 'action',
      value: 'Action '
    }];

  config: Array<IActionButton> = [{
    type: 'button',
    class: 'btn btn-info btn-sm',
    label: '',
    icon: 'book',
    tooltip: 'prenotazioni',
    action: Action.get
  }, {
    type: 'button',
    class: 'btn btn-warning btn-sm ml-1',
    label: '',
    icon: 'pencil',
    tooltip: 'modifica',
    action: Action.edit

  }, {
    type: 'button',
    class: 'btn btn-danger btn-sm ml-1',
    label: '',
    icon: 'trash-o',
    tooltip: 'elimina',
    action: Action.delete
  }];

  constructor(private service: UsersService, private router: Router) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      data => this.source = data as Array<User>
    );
  }

  deleteUser(user: User) {
    const confirmDelete = confirm('Vuoi veramente eliminare ' + user.name + '?');
    if (confirmDelete) {
      this.service.delete(user.id).subscribe(
        response => {
          const index = this.source.indexOf(user);
          this.source.splice(index, 1);
        }
      );
    }

  }

  editUser(user: User) {
    this.router.navigate(['users', 'edit', user.id]);
  }

  handle($event) {
    switch ($event.action) {
      case Action.delete:
        this.deleteUser($event.model);
        break;
      case Action.edit:
        this.editUser($event.model);
        break;
    }
  }
}
