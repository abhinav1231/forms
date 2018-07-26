import { Component, OnInit ,ViewChild,Input, Output,EventEmitter} from '@angular/core';
import {LoginComponent} from '../login/login.component'


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() childMethod: EventEmitter<any> = new EventEmitter<any>();
@Input() data : string;

  constructor() { }

  ngOnInit() {
  	this.call('ifrom child');
  	console.log('@input data::',this.data);
  }

   call(source){
   		console.log('You call on click',source);
   }


}
