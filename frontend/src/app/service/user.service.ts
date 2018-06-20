import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  loginUser(username: String, password: String) {
    return this.http.post('/users/login', { username: username, password: password })
    .map(data => data.json()).toPromise();
  }
}
