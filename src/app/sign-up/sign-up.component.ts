import { Component, OnInit } from '@angular/core';
export class Order {
  user: string;
  email: string;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  model: Order = new Order();

  constructor() { }

  onSubmit() {
  }

  ngOnInit() {
  }
}

