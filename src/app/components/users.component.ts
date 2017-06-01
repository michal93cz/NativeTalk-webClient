import { Component, OnInit} from '@angular/core';

import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'users',
  template: `
    <h3>Top Users</h3>
    <div *ngFor="let user of users">
      <a [routerLink]="['/opinions', user._id]" class="col-1-4">
        <div>
          <h4>{{user.name}}</h4>
        </div>
      </a>
      <button [routerLink]="['/user', user._id]">Details</button>
    </div>
  `
})

export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .then(users => this.users = users);
  }
}
