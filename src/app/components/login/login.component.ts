import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/feedback.service';
import { Institute } from 'src/app/institute';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _feedbackService: FeedbackService, private route: Router) { }

  institutions!:Institute[];

  ngOnInit(): void {
    this._feedbackService.getInstitutes()
    .subscribe(data=>this.institutions=data);
  }
  userName="";
  password="";
  warning="";
  openSB=false;

  login()
  {
    if(this.userName===""||this.password==="")
    {
      this.warning="Don't leave any fields empty";
      this.openSnackBar();
    }
    else
    {
      let currentUser = this.institutions.filter(user=>(user.email===this.userName)
                                                  && user.password===this.password);
      if(currentUser.length)
      {
        this.route.navigate(['/home/'+currentUser[0]._id]);
      }
      else
      {
        this.warning="Incorrect Email/Phone number and password";
        this.openSnackBar();
        this.userName="";
        this.password="";
      }
    }
  }
  openSnackBar() {
    this.openSB=true;
    setTimeout(()=>{
      this.openSB=false;
    },3000);
  }
}
