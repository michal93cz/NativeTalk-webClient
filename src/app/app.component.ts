import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AddNoticeComponent } from './components/add-notice.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NativeTalk';

  constructor(public dialog: MdDialog) { }

  openDialog() {
    this.dialog.open(AddNoticeComponent);
  }
}
