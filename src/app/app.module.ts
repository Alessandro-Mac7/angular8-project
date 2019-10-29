import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {UsersService} from './services/users.service';
import { UserComponent } from './user/user.component';
import {FormsModule} from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavComponent } from './nav/nav.component';
import {ModalComponent} from './modal/modal.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { FilterPipe } from './table/filter.pipe';
import {BookingsService} from './services/bookings.service';
import {PagerService} from './services/pager.service';
import {VehiclesService} from './services/vehicles.service';

const routes: Routes = [
    {
      path: 'users',
      component: UsersComponent,
    }, {
      path: 'users/new',
      component: UserDetailsComponent
    }, {
      path: 'users/edit/:id',
      component: UserDetailsComponent
      }, {
      path: '',
      redirectTo: 'users',
      pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    NavComponent,
    ModalComponent,
    ButtonComponent,
    TableComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [UsersService, BookingsService, PagerService, VehiclesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
