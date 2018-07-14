import { Component, OnInit, Inject } from '@angular/core';
import { Post } from '../model/post';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { Comment } from '../model/comment';
import { PostService } from '../service/post.service';
import { MatSnackBar } from '@angular/material';
import { listStagger } from '../router.animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
  commentContent: string;
  avatar: string;
  skip: number = 0;
  moreButton: boolean = true;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private userService: UserService, private postService: PostService) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      res => {
        if (res) {
          // console.log(res)
          this.currentUser = res
          this.postService.getAllPosts(this.currentUser.username, 0).subscribe(
            res => {
              if(res.success) {
                // console.log(res.posts)
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
    fd.append('createdByAvatar', this.currentUser.avatar);
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

  deletePost(i) {
    let postId: String = this.posts[i]._id;
    this.postService.deletePost(postId).subscribe(
      res => {
        if(res.success) {
          this.snackBar.open('Post Deleted!', 'Close', {
            duration: 2000,
            panelClass: 'green-snackbar'
          });
          // this.posts.splice(i, 1);
          this.ngOnInit();
        } else {
          this.snackBar.open('Post Not Deleted!', 'Close', {
            duration: 2000,
            panelClass: 'red-snackbar'
          });
        }
      },
      err => console.log(err)
    )
  }
  likeCancelLikePost(i) {

    let likedPost: Post = this.posts[i];
    let index = this.posts[i].likedBy.indexOf(this.currentUser.username);
    if(index >= 0) {
      this.posts[i].likedBy.splice(index, 1);
      this.posts[i].likes--;
    } else {
      this.posts[i].likedBy.push(this.currentUser.username);
      this.posts[i].likes++;
    }
    let likingUser: string = this.currentUser.username;
    this.postService.addOrCancelLikePosts(likedPost, likingUser).subscribe(
      res => {
        if(res.success) {
          // this.ngOnInit();
        }
      },
      err => console.log(err)
    )
  }
  deleteComment(comment, i) {
    let commentedpost: Post = this.posts[i];
    const index = commentedpost.comments.indexOf(comment);
    commentedpost.comments.splice(index,1);
    this.postService.updateComment(commentedpost).subscribe();
  }

  getAvatar(username: string) {
    this.userService.getAvatar(username).subscribe(
      res => {
        this.avatar = res.avatar
        return this.avatar
      }
    );

  }

  loadMore() {
    this.skip += 10;
    this.postService.getAllPosts(this.currentUser.username, this.skip).subscribe(
      res => {
        if(res.success) {
          if(res.posts.length === 0) this.moreButton = false;
          this.posts = this.posts.concat(res.posts);
        }
      },
      err => console.log(err)
    )
  }

  openDialog(i): void {
    let dialogRef = this.dialog.open(AddCommentComponent, {
      width: '300px',
      data: { commentContent: this.commentContent }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result !== 'undefined') {
        let commentedpost: Post = this.posts[i];
        this.commentContent = result.commentContent;
        if(this.commentContent !== '') {
          const newComment = new Comment;
          newComment.comment = this.commentContent;
          newComment.commentator = this.currentUser.username;
          commentedpost.comments.push(newComment);
          this.postService.updateComment(commentedpost).subscribe();
        }
      }
      this.commentContent = '';
    });
  }

}
@Component({
  selector: 'app-addcomment',
  templateUrl: './addComment.html',
})
export class AddCommentComponent {

  constructor(
    public dialogRef: MatDialogRef<AddCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}