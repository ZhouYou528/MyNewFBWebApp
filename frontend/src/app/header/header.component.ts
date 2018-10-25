import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user';
import { DataService } from '../service/data.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  messageNum: number;
  currentUser: User = null;

  constructor(private messageService: MessageService, private data: DataService, public userService: UserService, private router: Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.messageNum = message)
    if(this.userService.loggedIn()) {
      this.userService.getCurrentUser().subscribe(
        res => {
          if(res) {
            this.currentUser = res;
            this.messageService.getNewMessagesNum(this.currentUser.username).subscribe(
              res => {
                if(res.success) {
                  this.data.changeMessage(res.number)
                }
              },
              err => console.log(err)
            )
          }
        }
      ) 
    }
  }


  setUserProfile() {
    this.userService.getCurrentUser().subscribe(
      res => {
        // console.log(res)
        if(res) {
          this.currentUser = res;
          this.router.navigate(['/profile']);
        }
      },
      err => {
        if(err instanceof HttpErrorResponse) {
          if(err.status === 401) {
            this.router.navigate([''])
          }
        }
      }
    )
    
  }

  logoutUser() {
    this.userService.logoutUser()
  }
}
