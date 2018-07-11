import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

//material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';


//components
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AvatarPreviewComponent } from './user-profile/user-profile.component';

//service
import { UserService } from './service/user.service';
import { AuthGuard } from './service/auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FriendlistComponent, AddFriendComponent } from './friendlist/friendlist.component';
import { MessageComponent } from './message/message.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    AvatarPreviewComponent,
    FriendlistComponent,
    MessageComponent,
    AddFriendComponent,
    NewsComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatRadioModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatMenuModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  entryComponents: [
    AvatarPreviewComponent,
    AddFriendComponent
  ],
  providers: [
    UserService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
