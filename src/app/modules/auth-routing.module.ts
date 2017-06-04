import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../services/auth-guard.service';
import { AuthService }          from '../services/auth.service';
import { AuthComponent }       from '../components/auth.component';

const authRoutes: Routes = [
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})

export class AuthRoutingModule {}
