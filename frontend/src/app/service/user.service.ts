import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Router } from'@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(username: String, password: String) {
    return this.http.post<any>('/users/login', { username: username, password: password })
  }

  create(user: User) {
    return this.http.post<any>('/users/register', user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate([''])
  }

  getCurrentUser() {
    return this.http.get<User>('/users/getCurrentUser')
  }
}
