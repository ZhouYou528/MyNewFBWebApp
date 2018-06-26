import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material';
import { Message } from '../model/message';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

  name: string;
  currentUser = new User();

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      res => {
        if (res) {
          console.log(res)
          this.currentUser = res
        } else {
          console.log('Get current user error!')
        }
      },
      err => console.log(err)
    )
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddFriendComponent, {
      data: { name: this.name, currentUser: this.currentUser }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }


}
@Component({
  selector: 'app-addfriend',
  templateUrl: './addFriend.html',
})
export class AddFriendComponent {

  user = new User();
  message = new Message();
  username: string;

  constructor(private userService: UserService, public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddFriendComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  clearUser() {
    this.user = new User();
  }

  searchfriend() {
    if(this.username === undefined || this.username === '') {
      this.snackBar.open('Please type in a name!', 'Close', {
        duration: 2000,
        panelClass: 'red-snackbar'
      });
    } else {
      this.userService.getUserByUsername(this.username).subscribe(
        res => {
          if(res.success) {
            console.log('Found!');
            this.user = res.user;
          } else {
            this.snackBar.open('User not found!', 'Close', {
              duration: 2000,
              panelClass: 'red-snackbar'
            });
          }
        },
        err => console.log(err)
      );
    }
  }
  sendMessage() {
    if(this.user.username === this.data.currentUser.username) {
      this.snackBar.open('Can\'t add yourself!', 'Close', {
        duration: 2000,
        panelClass: 'red-snackbar'
      });
    } else if(this.data.currentUser.friend !== undefined && this.data.currentUser.friend.indexOf(this.user.username) > -1){
      this.snackBar.open('Already in your friendlist!', 'Close', {
        duration: 2000,
        panelClass: 'red-snackbar'
      });
    } else {
      this.message.fromUser = this.data.currentUser.username;
      this.message.toUser = this.user.username;
      this.message.category = 1;
      this.message.status = 1;
      this.message.createdAt = new Date();
      this.userService.friendRequest(this.message).subscribe(
        res => {
          if(res.success) {
            console.log('Friend request send success!')
            this.snackBar.open('Friend request send success!', 'Close', {
              duration: 2000,
              panelClass: 'green-snackbar'
            });
          } else {
            console.log('Friend request send failed!')
          }
        },
        err => console.log(err)
      );
      this.dialogRef.close();
    }
  }

}