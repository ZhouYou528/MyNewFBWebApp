import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser = new User();
  hide = true;

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      res => {
        if(res) {
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
    this.userService.updateEmail(this.currentUser).subscribe(
      res => {
        if (res) {
          console.log('Email modify success!')
          this.ngOnInit()
        } else {
          console.log('Update email error!')
        }
      },
      err => console.log(err)
    )
  }

  update_password() {
    this.userService.updatePassword(this.currentUser).subscribe(
      res => {
        if(res) {
          console.log('Password modify success!')
          this.ngOnInit()
        } else {
          console.log('Update password error!')
        }
      },
      err => console.log(err)
    )
  }

   openDialog(): void {
    let dialogRef = this.dialog.open(AvatarPreviewComponent, {
      width: '450px',
      data: {  currentUser: this.currentUser }
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

  constructor(
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
    if(this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (x: any) => {
        this.avatar = x.target.result;
      }
    }
  }
  updateAvatar() {
    const fd = new FormData();
    fd.append('avatar', this.selectedFile, this.selectedFile.name);
    this.userService.updateAvatar(this.currentUser, fd).subscribe(
      res => {
        if(res) {
          console.log('Avatar modify success!')
        } else {
          console.log('Update avatar error!')
        }
      },
      err => console.log(err)
    );
    this.dialogRef.close();
  }
}