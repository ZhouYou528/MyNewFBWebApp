import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser = new User();
  hide = true;

  constructor(private userService: UserService) { }

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
  
}
