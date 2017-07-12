import { Component, OnInit} from '@angular/core';

import { Notice }        from '../models/notice';
import { NoticeService } from '../services/notice.service';

@Component({
  selector: 'my-applies',
  template: `
    <h1>My applies</h1>
    <md-card *ngFor="let notice of notices">
      <md-card-header>
        <div md-card-avatar><md-icon class="default-avatar">account_circle</md-icon></div>
        <md-card-title>{{ notice.owner.name }}</md-card-title>
        <md-card-subtitle>Average rate: {{ notice.owner.average_opinion | number:'1.1-2' }}</md-card-subtitle>
      </md-card-header>
      <md-card-title>{{ notice.title }}</md-card-title>
      
      <md-card-subtitle>
        <md-chip-list>
          <md-chip>{{ notice.date | date}}</md-chip>
          <md-chip color="primary" selected="true">{{ notice.city }}</md-chip>
          <md-chip color="primary" selected="true">{{ notice.language }}</md-chip>
        </md-chip-list>
      </md-card-subtitle>
      <md-card-content>
        <p>
          {{ notice.description }}
        </p>
      </md-card-content>
      <md-card-actions>
        <button md-raised-button (click)="cancelApply(notice)">Cancel</button>
      </md-card-actions>
    </md-card>
  `
})

export class MyAppliesComponent implements OnInit {
  notices: Notice[] = [];

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getMyApplies()
      .then(notices => this.notices = notices);
  }

  cancelApply(notice: Notice) {
    
  }
}
