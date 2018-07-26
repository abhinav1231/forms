import { Component, OnInit,Input,Output, EventEmitter,ViewChild } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import { FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';

import {ChildComponent} from '../child/child.component'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	@ViewChild(ChildComponent) childcomp : ChildComponent;
  data : any;
  loginForm : FormGroup;

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb : FormBuilder
       ) { 
    this.data= 'parent data sharing';
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username : new FormControl('',Validators.required),
      password :''
    })
  }

  clickHere(source){
    this.childcomp.call('i am from call parent component');
  }

  login(){
    console.log(this.loginForm.value);
  }
}
