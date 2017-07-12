import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticesComponent }   from './components/notices.component';
import { UserDetailComponent } from './components/user-detail.component';
import { ProfileComponent } from './components/profile.component'
import { MyNoticesComponent } from "./components/my-notices.component";
import {MyAppliesComponent} from "./components/my-applies.component";

const routes: Routes = [
  { path: '', component: NoticesComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'my', component: MyNoticesComponent },
  { path: 'myapplies', component: MyAppliesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
