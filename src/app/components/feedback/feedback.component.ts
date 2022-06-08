import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/app/feedback.service';
import { Institute } from 'src/app/institute';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private _feedbackService: FeedbackService, private route: ActivatedRoute) { }

  loggedInstitute!: Institute;
  instituteID!: string | null;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.instituteID = id;
    this._feedbackService.getInstitute(this.instituteID)
    .subscribe(data=>this.loggedInstitute=data);
  }
  email="";
  name="";
  class="";
  feedback="";
  analysis!:object;
  warning="";
  openSB=false;

  submitFeedback(){
    if(this.email===""||this.name===""||this.feedback==="")
    {
      this.warning="Don't leave any fields empty";
      this.openSnackBar();
    }
    else{
      this._feedbackService.getAnalysis(this.feedback)
      .subscribe(data=>{
        this.analysis=data;
        var complaint={
          email:this.email,
          name:this.name,
          class:this.class,
          feedback:this.feedback,
          analysis:this.analysis,
          status:"Viewed"
        };
        this.loggedInstitute.complaints.push(complaint);
        this._feedbackService.updateInstitute(this.loggedInstitute)
        .subscribe(data=>console.log("Complaint added successfully"));
      });
      this.pg=2;
    }
  }

  openSnackBar() {
    this.openSB=true;
    setTimeout(()=>{
      this.openSB=false;
    },3000);
  }

  pg=1;
}
