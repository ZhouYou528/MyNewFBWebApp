import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  loginUser(username: String, password: String) {
    return this.http.post('/users/login', { username: username, password: password })
    .map(data => data.json()).toPromise();
  }

  create(user: User) {
    return this.http.post('/users/register', user)
    .map(data => data.json()).toPromise();
  }

}
