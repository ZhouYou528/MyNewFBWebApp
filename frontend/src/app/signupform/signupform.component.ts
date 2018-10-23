import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ValidateService } from '../service/validate.service';
import { MatSnackBar } from '@angular/material';
import { fallIn } from '../router.animations';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css'],
  animations: [fallIn()]
})
export class SignupformComponent implements OnInit {

  newUser = new User();
  confirmedpassword: string;
  msg: string;
  startDate = new Date();

  constructor(public snackBar: MatSnackBar, private validateService: ValidateService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  signupUser() {
    console.log(this.newUser);
    this.msg = this.validateService.validateRegister(this.newUser, this.confirmedpassword);
    if(this.msg ==='Success!') {
      this.userService.create(this.newUser)  
      .subscribe(
        res => {
          console.log(res);
          if(res.success) {
            this.snackBar.open('Register Success! Please login.', 'Close', {
              duration: 2000,
              panelClass:'green-snackbar'
            });
            this.router.navigate(['signin'])
          } else if(res.message === 'Username already exists'){
            this.snackBar.open('Username already exists!', 'Close', {
              duration: 2000,
              panelClass:'red-snackbar'
            });
          }
        },
        err => console.log(err)
      )   
    } else {
      this.snackBar.open(this.msg, 'Close', {
        duration: 2000,
        panelClass: 'red-snackbar'
      });
    }
       
  }

}
