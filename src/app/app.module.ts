import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { TetComponent } from './tet/tet.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ChildComponent } from './child/child.component';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TetComponent,
    SignUpComponent,
    ResetpasswordComponent,
    ChildComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    [NgbModule.forRoot()],
    [ AppRoutingModule ],    
    TooltipModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {}
