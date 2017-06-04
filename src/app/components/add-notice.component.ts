import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Notice } from "../models/notice";
import { NoticeService } from "../services/notice.service";

@Component({
  selector: 'add-notice',
  template: `
    <form class="add-notice-form" (ngSubmit)="onSubmit()">
      <h1 md-dialog-title>Dialog</h1>
      <div md-dialog-content>
        <md-list>
          <md-list-item>
            <md-input-container>
              <input mdInput name="title" maxlength="40" placeholder="Title" [(ngModel)]="notice.title" #title="ngModel" required>
              <md-hint align="end">{{title.length}} / 40</md-hint>
            </md-input-container>
          </md-list-item>
          
          <md-list-item>
            <md-input-container>
              <input mdInput name="description" maxlength="150" placeholder="Description" [(ngModel)]="notice.description" #description="ngModel" required>
              <md-hint align="end">{{description.length}} / 150</md-hint>
            </md-input-container>
          </md-list-item>
          
          <md-list-item>
            <md-input-container>
              <input mdInput name="date" [mdDatepicker]="picker" placeholder="Choose a date" [(ngModel)]="notice.date" #date="ngModel" required>
              <button mdSuffix [mdDatepickerToggle]="picker"></button>
            </md-input-container>
            <md-datepicker #picker></md-datepicker>
          </md-list-item>
          
          <md-list-item>
            <md-select name="city" placeholder="City" [(ngModel)]="notice.city" #city="ngModel" required>
               <md-option value="Poznan">Poznan</md-option>
               <md-option value="Warszawa">Warszawa</md-option>
            </md-select>
          </md-list-item>
          
          <md-list-item>
            <md-select name="language" placeholder="Language" [(ngModel)]="notice.language" #language="ngModel" required>
               <md-option value="English">English</md-option>
               <md-option value="Polish">Polish</md-option>
            </md-select>
          </md-list-item>
          
          <md-list-item>
            <md-select name="type" placeholder="Type" [(ngModel)]="notice.type" #type="ngModel" required>
               <md-option value="native">As a Native Speaker</md-option>
               <md-option value="host">As a Host</md-option>
            </md-select>
          </md-list-item>
        </md-list>
      </div>
      <div md-dialog-actions>
        <button md-button (click)="dialogRef.close()">Cancel</button>
        <span class="spacer"></span>
        <button md-raised-button color="accent" type="submit">Add</button>
      </div>
     </form>
  `
})

export class AddNoticeComponent {
  notice = new Notice();

  constructor(
    public dialogRef: MdDialogRef<AddNoticeComponent>,
    private noticeService: NoticeService
  ) {
  }

  onSubmit() {
    this.noticeService.create(this.notice)
      .then(() => {
        this.dialogRef.close()
      });
  }
}
