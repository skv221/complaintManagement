import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Institute } from './institute';



@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private instituteURL:string="/api/institutions";

  constructor(private http:HttpClient) { }

  getInstitutes(){
    return this.http.get<Institute[]>(this.instituteURL);
  }

  getInstitute(id:string | null){
    return this.http.get<Institute>(this.instituteURL+'/'+id);
  }

  
  createInstitute(institute: Institute){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   return this.http.post<Institute>(this.instituteURL,JSON.stringify(institute),options);
  }
  
  updateInstitute(institute: Institute){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   return this.http.put<Institute>(this.instituteURL+'/'+institute._id,JSON.stringify(institute),options);
  }

  getAnalysis(feedback: string){
    let score:any;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
    return this.http.post('/api/s-analyzer',JSON.stringify({feedback}),options);
    // return score;
  }

} 
