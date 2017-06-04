import { Component, OnInit} from '@angular/core';

import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'profile',
  template: `
    <md-card>
      <md-card-header>
        <div md-card-avatar><md-icon class="default-avatar">account_circle</md-icon></div>
        <md-card-title>{{ user.name }}</md-card-title>
        <md-card-subtitle>Average rate: {{ user.average_opinion | number:'1.1-2' }}</md-card-subtitle>
      </md-card-header>
      <md-card-subtitle>
        <md-chip-list>
          <md-chip>{{ user.created_at | date}}</md-chip>
          <md-chip color="primary" selected="true">{{ user.default_city }}</md-chip>
          <md-chip color="primary" selected="true">{{ user.default_language }}</md-chip>
        </md-chip-list>
      </md-card-subtitle>
      <md-card-content>
        <p>{{ user.bio }}</p>
      </md-card-content>
      <md-card-actions>
        <button md-raised-button>Edit</button>
      </md-card-actions>
    </md-card>
    
    <md-card *ngFor="let opinion of user.opinions">
      <md-card-title>{{ opinion.value }}</md-card-title>
      <md-card-content>
        <p>
          {{ opinion.description }}
        </p>
      </md-card-content>
    </md-card>
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
