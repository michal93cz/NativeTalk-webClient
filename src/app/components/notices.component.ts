import { Component, OnInit} from '@angular/core';

import { Notice }        from '../models/notice';
import { NoticeService } from '../services/notice.service';

@Component({
  selector: 'notices',
  template: `
    <md-tab-group md-stretch-tabs="yes">
      <md-tab label="Native Speakers">
        <md-card *ngFor="let notice of nativeNotices">
          <md-card-header [routerLink]="['/user', notice.owner._id]">
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
            <button md-raised-button color="accent">Add me</button>
          </md-card-actions>
        </md-card>
      </md-tab>
      <md-tab label="Hosts">
        <md-card *ngFor="let notice of hostNotices">
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
            <button md-raised-button color="accent">Add me</button>
          </md-card-actions>
        </md-card>
      </md-tab>
    </md-tab-group>
  `
})

export class NoticesComponent implements OnInit {
  nativeNotices: Notice[] = [];
  hostNotices: Notice[] = [];

  constructor(private noticeService: NoticeService) { }

  ngOnInit(): void {
    this.noticeService.getNotices('native')
      .then(notices => this.nativeNotices = notices);

    this.noticeService.getNotices('host')
      .then(notices => this.hostNotices = notices);
  }
}
