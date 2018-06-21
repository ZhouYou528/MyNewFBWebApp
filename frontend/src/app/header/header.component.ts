import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  setUserProfile() {
    this.userService.getCurrentUser().subscribe(
      res => {
        console.log(res)
        if(res) {
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
