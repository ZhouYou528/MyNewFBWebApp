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

}
