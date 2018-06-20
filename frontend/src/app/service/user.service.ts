import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  loginUser(username: String, password: String) {
    return this.http.post('/users/login', { username: username, password: password })
  }
}
