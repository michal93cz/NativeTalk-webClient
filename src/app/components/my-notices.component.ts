import { Component, OnInit} from '@angular/core';

import { Notice }        from '../models/notice';
import { NoticeService } from '../services/notice.service';

@Component({
  selector: 'my-notices',
  template: `
    <h1>My notices</h1>
    <md-card *ngFor="let notice of notices">
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
        <button md-raised-button color="accent" (click)="delete(notice)">Delete</button>
      </md-card-actions>
    </md-card>
  `
})

export class MyNoticesComponent implements OnInit {
  notices: Notice[] = [];

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getMyNotices()
      .then(notices => this.notices = notices);
  }

  delete(notice: Notice): void {
    this.noticeService
      .delete(notice._id)
      .then(() => {
        this.notices = this.notices.filter(h => h !== notice);
      });
  }
}
