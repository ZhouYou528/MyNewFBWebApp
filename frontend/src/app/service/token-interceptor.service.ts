import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from'@angular/common/http';
import { UserService } from'./user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  
  intercept(req, next) {
    //avoid cyclic dependency error, use injector
    let userService = this.injector.get(UserService)
    // console.log(userService.getToken())
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }



}
