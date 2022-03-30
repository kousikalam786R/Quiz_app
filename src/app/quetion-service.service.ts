import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuetionServiceService {

  constructor(private http: HttpClient) { }

  getQuestion(q_no:number){
    console.log(q_no)
    return this.http.get<any>(`http://localhost:3000/question?q_no=${q_no}`)
  }
}
