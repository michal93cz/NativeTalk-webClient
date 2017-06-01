import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticesComponent }   from './components/notices.component';
import { UsersComponent }      from './components/users.component';
import { OpinionsComponent } from './components/opinions.component';
import { UserDetailComponent } from './components/user-detail.component';
import { ProfileComponent } from './components/profile.component'

const routes: Routes = [
  { path: '', component: NoticesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'opinions/:id', component: OpinionsComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
