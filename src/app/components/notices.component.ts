import { Component, OnInit} from '@angular/core';

import { Notice }        from '../models/notice';
import { NoticeService } from '../services/notice.service';

@Component({
  selector: 'notices',
  template: `
    <md-tab-group md-stretch-tabs="yes">
      <md-tab label="Native Speakers">
        <md-card *ngFor="let notice of nativeNotices" class="col-1-4">
          <md-card-title>{{notice.title}}</md-card-title>
        </md-card>
      </md-tab>
      <md-tab label="Hosts">
        <md-card *ngFor="let notice of hostNotices" class="col-1-4">
          <md-card-title>{{notice.title}}</md-card-title>
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
