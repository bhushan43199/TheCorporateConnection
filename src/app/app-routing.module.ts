import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IloginComponent } from './ilogin/ilogin.component';
import { UserRegistorComponent } from './user-registor/user-registor.component';
import { VenueregistorComponent } from './venueregistor/venueregistor.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path:"indexLogin", component: IloginComponent },
  { path:"userreg", component: UserRegistorComponent },
  { path:"venuereg", component: VenueregistorComponent },
  { path:"Admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
