import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { PostService } from '../service/post.service';
import { MatSnackBar } from '@angular/material';
import { listStagger } from '../router.animations';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations:[listStagger()]
})
export class NewsComponent implements OnInit {

  url: string = '';
  selectedFile: File = null;
  post: Post = new Post();
  currentUser = new User();
  posts: Array<Post> = [];

  constructor(public snackBar: MatSnackBar, private userService: UserService, private postService: PostService) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      res => {
        if (res) {
          // console.log(res)
          this.currentUser = res
          this.postService.getAllPosts(this.currentUser.username).subscribe(
            res => {
              if(res.success) {
                console.log(res.posts)
                this.posts = res.posts;
              }
            },
            err => console.log(err)
          )
        } else {
          console.log('Get current user error!')
        }
      },
      err => console.log(err)
    )
  }

  fileChangeEvent(event) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (x: any) => {
        this.url = x.target.result;
      }
    }
  }
  sendPost() {
    const fd = new FormData();
    fd.append('body', this.post.body);
    fd.append('createdBy', this.currentUser.username);
    // fd.append('createdAt', new Date().toUTCString());
    if (this.selectedFile != null) {
      fd.append('img', this.selectedFile, this.selectedFile.name);
    }
    this.postService.sendPost(fd).subscribe(
      res => {
        if(res.success) {
          console.log(res)
          this.snackBar.open('Send post success!', 'Close', {
            duration: 2000,
            panelClass: 'green-snackbar'
          });
          this.url = "";
          this.post = new Post();
        } else {
          this.snackBar.open('Please say something!', 'Close', {
            duration: 2000,
            panelClass: 'red-snackbar'
          });
        }
      },
      err => {
        console.log(err)
        this.snackBar.open('Send post failed!', 'Close', {
          duration: 2000,
          panelClass: 'red-snackbar'
        });
      }
    );
  this.ngOnInit()
  }

}
