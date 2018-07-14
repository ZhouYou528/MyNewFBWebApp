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

  getAllPosts(username: string, skip: number) {
    return this.http.get<any>('/posts/getAllPosts/' + username + '/' + skip);
  }

  deletePost(id: String) {
    return this.http.delete<any>('/posts/deletePost/' + id);
  }

  addOrCancelLikePosts(post:Post, username:string) {
    return this.http.put<any>('/posts/likePostOrCancelLike/' + username , post);
  }

  updateComment(post: Post) {
    return this.http.put<any>('/posts/updateComment/' + post._id, post)
  }

}
