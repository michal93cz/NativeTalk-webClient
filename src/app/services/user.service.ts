import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../models/user';
import { Opinion } from '../models/opinion';

@Injectable()
export class UserService {

  private headers = new Headers({'Authorization': 'Bearer EAAF0TQETtIUBAKXf7vgsjdBTgwu8wbKXvRoKzOZCqBkeribZBF2rG6MY6REYFZBq2ChctZAomDSFMOKdDT5MeLatgupu96f6Cb9yQ5W2ATRchN7wfekaxaQ2WT6V9MzK14m1LYbZByvXLEiK7I73MQKkibGhUa6RQbp6SZBKPD1AZDZD',
    'Content-Type': 'application/json'});

  private usersUrl = 'api/users';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  getProfile(): Promise<User> {
    return this.http.get(this.usersUrl + '/profile', {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  getUserDetail(id: string): Promise<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  getOpinions(id: string): Promise<Opinion[]> {
    const url = `${this.usersUrl}/${id}/opinions`;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Opinion[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
