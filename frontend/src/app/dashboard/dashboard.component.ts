import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { UserService } from '../service/user.service';
import { MessageService } from '../service/message.service';
import { User } from '../model/user';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  messageNum: number;
  currentUser: User = null;

  constructor(private data: DataService, private userService: UserService, private messageService: MessageService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.messageNum = message);
    this.userService.getCurrentUser().subscribe(
      res => {
        if(res) {
          this.currentUser = res;
          this.messageService.getNewMessagesNum(this.currentUser.username).subscribe(
            res => {
              if(res.success) {
                // this.message = res.number;
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
