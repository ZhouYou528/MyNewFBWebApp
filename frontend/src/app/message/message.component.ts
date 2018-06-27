import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Message } from '../model/message';
import { listStagger, fallIn } from '../router.animations';
import { MessageService } from '../service/message.service';
import { Friendship } from '../model/friendship';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations:[listStagger(),fallIn()]
})
export class MessageComponent implements OnInit {

  messages: Message[]

  constructor(private userService: UserService, private messageService: MessageService) { }

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

  decline(message, i) {
    message.status = 2;
    this.messageService.updateMessage(message).subscribe(
      res => {
        if(res) {
          this.messages.splice(i, 1);
         } else {
           console.log(res)
         }
      },
      err => console.log(err)
    );
  }

  accept(message, i) {
    let friendship = new Friendship();
    friendship.userTwo = message.fromUser;
    friendship.createdAt = new Date();
    console.log(friendship)
    this.userService.addFriend(friendship).subscribe(
      res => {
        if(res.success) {
          console.log('Add friend success!')
          message.status = 0;
          this.messageService.updateMessage(message).subscribe(
            res => {
              if(res) {
                
               } else {
                 console.log(res)
               }
            },
            err => console.log(err)
          );
        } else {
          console.log('Add friend failed!')
        }
      }
    );
  }
  
}
