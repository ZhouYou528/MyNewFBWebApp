import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(username: String, password: String) {
    return this.http.post<any>('/users/login', { username: username, password: password })
  }

  create(user: User) {
    return this.http.post<any>('/users/register', user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
