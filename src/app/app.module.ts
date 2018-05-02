import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { TetComponent } from './tet/tet.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TetComponent,
    SignUpComponent,
    ResetpasswordComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [NgbModule.forRoot()],
    [ AppRoutingModule ],    
    TooltipModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {}
