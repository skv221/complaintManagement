import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positive',
  templateUrl: './positive.component.html',
  styleUrls: ['./positive.component.css']
})
export class PositiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reviews=[
    {
      name:"Venkatesan S K",
      email:"www.venkatesan.skv@gmail.com",
      feedback:`The service is awesome and I can't find any problems. Please continue the same kind of service in future.`
    },
    {
      name:"Pranav Shiva P",
      email:"kuttyshiva2000@gmail.com",
      feedback:`The service is awesome and I can't find any problems. Please continue the same kind of service in future.`
    },
    {
      name:"Sai Anirudh K",
      email:"amazinganirudhhere@gmail.com",
      feedback:`The service is awesome and I can't find any problems. Please continue the same kind of service in future.`
    },
    {
      name:"Nathan M",
      email:"nathanmcse@citchennai.net",
      feedback:`The service is awesome and I can't find any problems. Please continue the same kind of service in future.`
    }
  ]
}
