import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {UsersService} from './services/users.service';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
