import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateLogin(user) {
    if (user.username === undefined ||
      user.username === '' ||
      user.password === undefined ||
      user.password === '') {
      return false;
    } else {
      return true;
    }
  }

  validateRegister(user) {
    if (user.nickname === undefined ||
      user.nickname === '' ||
      user.email === undefined ||
      user.email === '' ||
      user.username === undefined ||
      user.username === '' ||
      user.password === undefined ||
      user.password === '' ||
      user.dob === undefined ||
      user.dob === '') {
      return false;
    } else {
      return true;
    }
  }
}
