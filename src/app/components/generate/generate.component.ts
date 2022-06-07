import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/app/feedback.service';
import { Institute } from 'src/app/institute';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  constructor(private _feedbackService: FeedbackService, private route: ActivatedRoute) { }

  loggedInstitute!: Institute;
  instituteID!: string | null;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.instituteID = id;
    this._feedbackService.getInstitute(this.instituteID)
    .subscribe(data=>this.loggedInstitute=data);
  }
  buttonText="Click to copy";
  copyMsg=`Dear customer, Thank you for utilising our service. We need your feedback in order to improve our service. Kindly submit your feedback in the following link. 
  
  http://localhost:3000/feedback/`;

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val+this.loggedInstitute._id;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    this.buttonText="Copied!!"
    document.body.removeChild(selBox);
  }
}
