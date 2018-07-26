import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';
import {Http} from '@angular/http';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm : FormGroup;	
  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder : FormBuilder,
        private http : Http
       ) { }

  ngOnInit() {
  		this.formInitialization();
  }

  formInitialization(){
  	this.signUpForm = this.formBuilder.group({
  		username : new FormControl('',Validators.required),
  		password: new FormControl('',Validators.required),
  		email : new FormControl('',Validators.required),
  		confirmpassword : new FormControl('',Validators.required)
  	})
  }
}
