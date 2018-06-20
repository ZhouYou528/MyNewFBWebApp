import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.css']
})
export class SigninformComponent implements OnInit {

  hide = true;
  signinUser = new User();
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    this.signinUser.username = e.target.elements[0].value;
    this.signinUser.password = e.target.elements[1].value;

    // TO-DO: validate input

    this.userService.loginUser(this.signinUser.username, this.signinUser.password)
    .then(res => {
      console.log(res);
      if(res.success) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['dashboard']);
      } else {
        
      }
    }).catch(err => console.log(err));
  }

}
