import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { LoginCardComponent } from './Security/Login-card/Login-card.component';
import { LoginUserListComponent } from './Security/login-user-list/login-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCardComponent,
    LoginUserListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
