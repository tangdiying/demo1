import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject/subject.service';
import * as _ from 'lodash'
@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html',
  styleUrls: ['./demo12.component.css']
})
export class Demo12Component implements OnInit {
  inputValue: string;
  options: string[] = [];
  num
  onInput(value: string): void {
    this.options = value ? [value, value + value, value + value + value] : [];
    console.log(this.inputValue)
  }
  constructor(
    public subjectService:SubjectService
  ) { }

  ngOnInit() {
    this.subjectService.getSubject().subscribe(res=>{
      this.num = res
      console.log(res)
    })
    let array = [1,2,3,1,2,1]
    let obj = [
      {name:"tdy",age:18},
      {name:"tdy",age:18},
      {name:"hwx",age:15},
      {name:"tyh"}
    ]
    console.log(_.find(obj,{name:"tdy"}))
    console.log(_.find(obj,{name:"tdy",age:18}))
    console.log(_.find(obj,"age"))
  }
  blur(){
    console.log(this.inputValue)
  }
  add(){
    this.subjectService.add()
  }
  reduce(){
    this.subjectService.reduce()
  }
}
