import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'add-notice',
  template: `
    <h1 md-dialog-title>Dialog</h1>
    <div md-dialog-content>
      <form class="add-notice-form">
        <md-list>
          <md-list-item>
            <md-input-container>
              <input mdInput #title maxlength="40" placeholder="Title">
              <md-hint align="end">{{title.value.length}} / 40</md-hint>
            </md-input-container>
          </md-list-item>
          
          <md-list-item>
            <md-input-container>
              <input mdInput #description maxlength="150" placeholder="Description">
              <md-hint align="end">{{description.value.length}} / 150</md-hint>
            </md-input-container>
          </md-list-item>
          
          <md-list-item>
            <md-select placeholder="City">
               <md-option value="Poznan">Poznan</md-option>
               <md-option value="Warszawa">Warszawa</md-option>
            </md-select>
          </md-list-item>
        </md-list>
      </form>
    </div>
    <div md-dialog-actions>
      <button md-button (click)="dialogRef.close()">Cancel</button>
      <span class="spacer"></span>
      <button md-raised-button color="accent" (click)="dialogRef.close()">Add</button>
    </div>
  `
})

export class AddNoticeComponent {
  constructor(
    public dialogRef: MdDialogRef<AddNoticeComponent>
  ) { }
}
