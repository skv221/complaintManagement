import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buttonText="Click to copy";
  copyMsg=`Dear customer, Thank you for utilising our service. We need your feedback in order to improve our service. Kindly submit your feedback in the following link. 
  
http://localhost:4200/feedback`;
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    this.buttonText="Copied!!"
    document.body.removeChild(selBox);
  }
}
