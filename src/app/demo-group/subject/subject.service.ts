import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  subject = new Subject()
  number:number = 0;
  constructor(private http:HttpClient) { }
  add(){
    this.number++;
    this.subject.next(this.number)
  }
  reduce(){
    this.number--;
    this.subject.next(this.number)
  }
  getSubject(){
    return this.subject;
  }
  getData(page,limit){
    let params = {
      page:page,
      limit:limit
    }
    return this.http.get("http://192.168.50.187:3000/getAllData",{params:params}).pipe(delay(8000))
  }
}
