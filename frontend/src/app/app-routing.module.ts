import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { SigninformComponent } from './signinform/signinform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './service/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: SigninformComponent
  },
  {
    path: 'signup',
    component: SignupformComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'message',
    component: MessageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = 
[
  SigninformComponent, 
  SignupformComponent,
  DashboardComponent,
  UserProfileComponent,
  HomeComponent,
  MessageComponent,
  AboutComponent
]