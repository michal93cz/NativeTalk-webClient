import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Notice } from '../models/notice';

@Injectable()
export class NoticeService {

  private headers = new Headers({'Authorization': 'Bearer EAAF0TQETtIUBAKXf7vgsjdBTgwu8wbKXvRoKzOZCqBkeribZBF2rG6MY6REYFZBq2ChctZAomDSFMOKdDT5MeLatgupu96f6Cb9yQ5W2ATRchN7wfekaxaQ2WT6V9MzK14m1LYbZByvXLEiK7I73MQKkibGhUa6RQbp6SZBKPD1AZDZD'});
  private noticesUrl = 'api/notices';  // URL to web api

  constructor(private http: Http) { }

  getNotices(type: string): Promise<Notice[]> {
    let url = type ? this.noticesUrl + `?type=${type}` : this.noticesUrl;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Notice[])
      .catch(this.handleError);
  }

  create(notice: Notice): Promise<Notice> {
    return this.http
      .post(this.noticesUrl, JSON.stringify(notice), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Notice)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
