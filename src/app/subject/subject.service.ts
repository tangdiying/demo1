import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  subject = new Subject()
  number:number = 0;
  constructor() { }
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
}
