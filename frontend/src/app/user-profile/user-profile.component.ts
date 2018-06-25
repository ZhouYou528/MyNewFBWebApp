import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ValidateService } from '../service/validate.service'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser = new User();
  hide = true;
  emaileditable = false;

  constructor(public snackBar: MatSnackBar, private validateService: ValidateService, private userService: UserService, public dialog: MatDialog) { }

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

  update_email() {
    if (this.validateService.validateEmail(this.currentUser.email)) {
      this.userService.updateEmail(this.currentUser).subscribe(
        res => {
          if (res) {
            console.log('Email modify success!')
            this.emaileditable = false;
            this.snackBar.open('Email update success!', 'Close', {
              duration: 2000,
              panelClass: 'green-snackbar'
            });
            this.ngOnInit()
          } else {
            console.log('Update email error!')
          }
        },
        err => console.log(err)
      )
    } else {
      this.snackBar.open('Email is not valid!', 'Close', {
        duration: 2000,
        panelClass: 'red-snackbar'
      });
    }
  }

  update_password() {
    if (this.currentUser.password.length > 16) {
      this.snackBar.open('Password too long!', 'Close', {
        duration: 2000,
        panelClass: 'red-snackbar'
      });
    } else {
      this.userService.updatePassword(this.currentUser).subscribe(
        res => {
          if (res) {
            console.log('Password modify success!')
            this.snackBar.open('Password update success!', 'Close', {
              duration: 2000,
              panelClass: 'green-snackbar'
            });
            this.ngOnInit()
          } else {
            console.log('Update password error!')
          }
        },
        err => console.log(err)
      )
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AvatarPreviewComponent, {
      width: '450px',
      data: { currentUser: this.currentUser }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
}
@Component({
  selector: 'app-avatarpreview',
  templateUrl: './avatarPreview.html',
  styleUrls: ['./user-profile.component.css']
})
export class AvatarPreviewComponent implements OnInit {

  currentUser: User = new User();
  selectedFile: File = null;
  avatar = '';

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AvatarPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.data.currentUser
    this.avatar = this.data.currentUser.avatar
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  fileChangeEvent(event) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (x: any) => {
        this.avatar = x.target.result;
      }
    }
  }
  updateAvatar() {
    const fd = new FormData();
    if (this.selectedFile == null) this.dialogRef.close();
    else {
      fd.append('avatar', this.selectedFile, this.selectedFile.name);
      this.userService.updateAvatar(this.currentUser, fd).subscribe(
        res => {
          if (res) {
            console.log('Avatar modify success!')
            this.snackBar.open('Avatar update success!', 'Close', {
              duration: 2000,
              panelClass: 'green-snackbar'
            });
          } else {
            console.log('Update avatar error!')
            this.snackBar.open('Failed to update avatar!', 'Close', {
              duration: 2000,
              panelClass: 'red-snackbar'
            });
          }
        },
        err => {
          console.log(err)
          this.snackBar.open('Failed to update avatar!', 'Close', {
            duration: 2000,
            panelClass: 'red-snackbar'
          });
        }
      );
      this.dialogRef.close();
    }
  }
}