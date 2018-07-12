import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  sendPost(fd: FormData) {
    return this.http.post<any>('/posts/newPost', fd);
  }

  getAllPosts(username: string) {
    return this.http.get<any>('/posts/getAllPosts/' + username);
  }

  deletePost(id: String) {
    return this.http.delete<any>('/posts/deletePost/' + id);
  }
}
