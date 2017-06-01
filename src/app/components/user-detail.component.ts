import 'rxjs/add/operator/switchMap';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-detail',
  template: `
    <h3>Top Users</h3>
    <div>
      <!--<h4>{{ user.name }}</h4>-->
      <!--<p>{{ user.bio }}</p>-->
      <div *ngFor="let opinion of user.opinions" class="col-1-4">
        <h4>{{opinion.description}}</h4>
        <h2>{{opinion.value}}</h2>
      </div>
    </div>
  `
})

export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.userService.getUserDetail(params['id']))
      .subscribe(user => this.user = user);
  }
}
