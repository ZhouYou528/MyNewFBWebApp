import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateLogin(user) {
    if (user.username === '' || user.username === undefined){
      return 'Please fill in the user name!';
    } else if(user.password === '' || user.password === undefined){
      return 'Please fill in the user password!';
    } else {
      return 'Success!';
    }
  }

  validateRegister(user, confirmedpassword) {
    if (user.username === '' || user.username === undefined){
      return 'Please fill in the user name!';
    } else if(user.password === '' || user.password === undefined){
      return 'Please fill in the user password!';
    } else if(user.password !== confirmedpassword) {
      return 'Password don\'t match!';
    } else if(user.email === '' || user.email === undefined) {
      return 'Please fill in the user email!';
    } else if(!this.validateEmail(user.email)) {
      return 'Email is not valid!';
    } else { 
      return 'Success!';
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}

