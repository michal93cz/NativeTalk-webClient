import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoticesComponent } from './components/notices.component';
import { UsersComponent } from './components/users.component';
import { UserDetailComponent } from './components/user-detail.component';
import { OpinionsComponent } from './components/opinions.component';
import { ProfileComponent } from './components/profile.component';
import { AddNoticeComponent } from './components/add-notice.component';

import { NoticeService } from './services/notice.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NoticesComponent,
    UsersComponent,
    OpinionsComponent,
    UserDetailComponent,
    ProfileComponent,
    AddNoticeComponent
  ],
  entryComponents: [
    AddNoticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule
  ],
  providers: [
    NoticeService,
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
