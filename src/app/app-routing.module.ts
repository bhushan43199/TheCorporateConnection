import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IloginComponent } from './ilogin/ilogin.component';
import { UserRegistorComponent } from './user-registor/user-registor.component';
import { VenueregistorComponent } from './venueregistor/venueregistor.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path:'',redirectTo:'Homepage',pathMatch:'full'}, 
  { path:"Homepage", component: HomepageComponent },

//   {path:'Homepage',
//   children:[
//     { path:"", component: HomepageComponent },
//     { path:"indexLogin",outlet:'homepagerouter', component: IloginComponent },
//   ]
// },
  { path:"indexLogin", component: IloginComponent },
  { path:"Homepage", component: HomepageComponent },
  { path:"userreg", component: UserRegistorComponent },
  { path:"venuereg", component: VenueregistorComponent },
  { path:"Admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
