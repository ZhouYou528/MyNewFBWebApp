import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {

  newUser = new User();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  signupUser() {
    console.log(this.newUser);
    this.userService.create(this.newUser)         
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
