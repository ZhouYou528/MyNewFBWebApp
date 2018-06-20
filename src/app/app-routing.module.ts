import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { SigninformComponent } from './signinform/signinform.component';
import { SignupformComponent } from './signupform/signupform.component';

export const appRoutes: Routes = [{
    path: '',
    component: SigninformComponent
  },
  {
    path: 'signup',
    component: SignupformComponent
  }];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [SigninformComponent]