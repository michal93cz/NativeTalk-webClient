import { Component, OnInit} from '@angular/core';

import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'profile',
  template: `
    <h3>Top Users</h3>
    <div>
      <h4>{{user.name}}</h4>
    </div>
  `
})

export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfile()
      .then(user => this.user = user);
  }
}
