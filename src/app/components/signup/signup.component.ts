import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/feedback.service';
import { Institute } from '../../institute';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _feedbackService: FeedbackService, private route: Router) { }

  institute: Institute={
    name:"",
    _id:"",
    email:"",
    phone:"",
    password:"",
    type:"",
    complaints:[]
  };

  ngOnInit(): void {
  }

  name="";
  email="";
  phone="";
  type="";
  pass="";
  cpass="";
  pg=1;
  warning="";
  openSB=false;

  navigate(){
    if(this.name===""||this.email===""||this.phone===""){
      this.warning="Don't leave any fields empty";
      this.openSnackBar();
    }
    else{
      this.pg=2;
    }
  }

  signup(){
    if(this.type===""||this.pass===""||this.cpass===""){
      this.warning="Don't leave any fields empty";
      this.openSnackBar();
    }
    else{
      if(this.pass===this.cpass){
        this.institute.name=this.name;
        this.institute.email=this.email;
        this.institute.phone=this.phone;
        this.institute.password=this.pass;
        this.institute.type=this.type;
        this._feedbackService.createInstitute(this.institute)
        .subscribe(data=>console.log("Account created!"));
        this.warning="Account created successfully!!";
        this.openSnackBar();
        this.route.navigate(['/login']);
      }
      else{
        this.warning="Passwords don't match";
        this.openSnackBar();
        this.pass="";
        this.cpass="";
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
