import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Message } from '../model/message';
import { listStagger, fallIn } from '../router.animations';
import { MessageService } from '../service/message.service';
import { Friendship } from '../model/friendship';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations:[listStagger(),fallIn()]
})
export class MessageComponent implements OnInit {

  messages: Message[]

  constructor(public snackBar: MatSnackBar, private userService: UserService, private messageService: MessageService) { }

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
    // message.status = 2;
    // this.messageService.updateMessage(message).subscribe(
    //   res => {
    //     if(res) {
          this.messages.splice(i, 1);
    //      } else {
    //        console.log(res)
    //      }
    //   },
    //   err => console.log(err)
    // );
    this.messageService.deleteMessage(message).subscribe();
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
          this.snackBar.open('Friend added successfully!', 'Close', {
            duration: 2000,
            panelClass: 'green-snackbar'
          });
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
          this.snackBar.open('Friend is already in the list!', 'Close', {
            duration: 2000,
            panelClass: 'red-snackbar'
          });
        }
      },
      err => console.log(err)
    );
  }
  
}
