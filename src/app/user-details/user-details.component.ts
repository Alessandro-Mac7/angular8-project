import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/User';
import {UsersService} from '../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IButton} from '../interfaces/IButton';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  saveButton: IButton = {
    type: 'button',
    class: 'btn btn-success',
    label: 'Save',
    icon: 'plus',
    tooltip: 'inserisci utente'
  };
  resetButton: IButton = {
    type: 'button',
    class: 'btn btn-outline-success ml-1',
    label: 'Reset',
    icon: 'eraser',
    tooltip: 'reset form'
  };

  private userCopy: User;
  private  userOriginal: User;
  @Input() set user(user: User) {
    this.userOriginal = user;
    this.userCopy = Object.assign({}, user);
  }
  get user() {
    return this.userOriginal;
  }
  constructor(private userService: UsersService, private serviceRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.user = new User();

    if ( this.router.url === '/users/new') {
      this.saveButton.label = 'Save';
      this.saveButton.icon = 'plus';
    } else {
      this.saveButton.label = 'Update';
      this.saveButton.icon = 'arrow-up';
    }

    this.serviceRoute.params.subscribe(
      (params) => {
        if (params.id !== undefined) {
          this.userService.get(+params.id).subscribe(
              data => this.user = data as User
          );
        }
      }
    );
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.update(this.user).subscribe(
        response => alert('ok'));
      this.router.navigate(['users']);
    } else {
      console.log(this.user.id)
      this.createUser(this.user);
    }

  }

  createUser(user: User) {
    this.userService.save(user).subscribe(
      response => alert(response));
    this.router.navigate(['users']);
  }

  resetForm() {
    if (this.user.id > 0) {
      this.user = this.userCopy;
    } else {
      this.user = new User();
    }
  }
}
