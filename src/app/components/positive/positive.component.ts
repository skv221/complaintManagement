import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/app/feedback.service';
import { Institute } from 'src/app/institute';

@Component({
  selector: 'app-positive',
  templateUrl: './positive.component.html',
  styleUrls: ['./positive.component.css']
})
export class PositiveComponent implements OnInit { 

  constructor(private _feedbackService: FeedbackService, private route: ActivatedRoute) { }

  loggedInstitute!: Institute;
  instituteID!: string | null;
  reviews!: any[];

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.instituteID = id;
    this._feedbackService.getInstitute(this.instituteID)
    .subscribe(data=>{
      this.loggedInstitute=data
      this.reviews=this.loggedInstitute.complaints.filter(user=>user.analysis.score>0);
    });
  }
  
}
