import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { ValidateService } from '../service/validate.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.css']
})
export class SigninformComponent implements OnInit {

  hide = true;
  signinUser = new User();
  msg: string;

  constructor(public snackBar: MatSnackBar, private router: Router, private userService: UserService, private validateService: ValidateService) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    this.signinUser.username = e.target.elements[0].value;
    this.signinUser.password = e.target.elements[1].value;
    this.msg = this.validateService.validateLogin(this.signinUser);
    if (this.msg === 'Success!') {
      this.userService.loginUser(this.signinUser.username, this.signinUser.password)
        .subscribe(
          res => {
            console.log(res)
            if (res.success) {
              this.snackBar.open('Login Success!', 'Close', {
                duration: 2000,
                panelClass:'green-snackbar'
              });
              localStorage.setItem('token', res.token);
              this.router.navigate(['dashboard']);
            } else if(res.message === 'Invalid password.'){
              this.snackBar.open('Invalid Password!', 'Close', {
                duration: 2000,
                panelClass:'red-snackbar'
              });
            } else if(res.message === 'Username not found.') {
              this.snackBar.open('No such user, please sign up!', 'Close', {
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
        panelClass:'red-snackbar'
      });
    } 
  }

}
