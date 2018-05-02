import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';

@Component({
  selector: 'resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(
        private route: ActivatedRoute,
        private router: Router,
       ) { }

  ngOnInit() {
  }

}
