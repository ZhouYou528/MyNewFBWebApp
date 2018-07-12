import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Router } from'@angular/router';
import { Message } from '../model/message';
import { Friendship } from '../model/friendship';

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

  updateEmail(user: User) {
    return this.http.put<User>('/users/update-email/' + user._id, user)
  }

  updatePassword(user: User) {
    return this.http.put<User>('users/update-password/' + user._id, user)
  }

  updateAvatar(user: User, fd: FormData) {
    return this.http.put<User>('users/update-avatar/' + user._id, fd)
  }

  friendRequest(message: Message) {
    return this.http.post<any>('messages/add', message)
  }

  getUserByUsername(username: string) {
    return this.http.get<any>('users/get-user-by-username/' + username)
  }

  getAllMessages() {
    return this.http.get<any>('messages/get-all')
  }

  addFriend(friendship: Friendship) {
    return this.http.post<any>('friendships/add', friendship)
  }

  getAllFriends() {
    return this.http.get<any>('friendships/get-all-friends')
  }

  deleteFriend(friendname: string) {
    return this.http.delete<any>('friendships/delete-friend/' + friendname)
  }

  getAvatar(username: string) {
    return this.http.get<any>('users/getAvatar/' + username)
  }
}
