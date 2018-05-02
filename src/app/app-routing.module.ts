import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './login/login.component';
import { TetComponent }         from './tet/tet.component';
import { SignUpComponent }      from './sign-up/sign-up.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component'

const routes: Routes = [
  {path:'', component: TetComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'resetpassword', component: ResetpasswordComponent}
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



