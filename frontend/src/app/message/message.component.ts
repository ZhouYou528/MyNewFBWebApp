import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Message } from '../model/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  messages: Message[]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllMessages().subscribe(
      res => {
        if(res) this.messages = res.message;
        else {
          console.log('error!')
        }
      },
      err => console.log(err)
    );
  }

  
}
