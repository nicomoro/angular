import { Component, OnInit } from '@angular/core';
import { doesNotThrow } from 'assert';
import { userInfo } from 'os';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  isAuth=true;
  user={
    name: 'Doe',
    firstname: 'John',
    age: '25',
    quote: '',
    photo:'https://randomuser.me/api/portraits/lego/2.jpg'

  };

  constructor() { 
     
  }

  ngOnInit() {
  }
  onClick(){
  
    
  }

}
