import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash'
import { SubjectService } from '../subject/subject.service';
import { cascaderData } from '../menu';
@Component({
  selector: 'app-group-entry',
  templateUrl: './group-entry.component.html',
  styleUrls: ['./group-entry.component.css']
})
export class GroupEntryComponent implements OnInit,OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(this)
  }

  squareArray = []
  listheight = 600;
  listitemheight = 30
  page:number = 0;
  isBottomLoading:boolean = false;
  items = []
  Demo10Component;
  demo1 = false;
  limit:number = 20;
  isGetData = false;
  demo3(){

  }

  demo16 = true;
  cascaderData = cascaderData;
  constructor(
    private http:HttpClient,
    private server:SubjectService
    ){
  }
  ngOnInit(): void {
    for(let i=0;i<40;i++){
      this.squareArray.push(i)
    }
    // this.getData();
    // setInterval(()=>{
    //   console.log(this)
    // },1000)
    this.page++;
    this.server.getData(this.page,20)
    .subscribe(res=>{
      this.items = _.concat(this.items,res)
      // this.isGetData = true
    })

  }
  doMoreData(){
    // this.http
    // this.server
    // debugger
    // console.log(this)
    // return this.http.get("http://localhost:8000/getdata?page="+this.page+"&limit=20")
  }
  pageIndexChange(e){
    // this.page = e;
    // console.log(e)
  }
  getres(res){
    // this.items = _.concat(this.items,res['data'])
    // console.log(res)
  }
  demo2(){
    this.demo1 = !this.demo1
  }
  getData(){
    this.page++;
    this.server.getData(this.page,20)
    .subscribe(res=>{
      this.items = _.concat(this.items,res)
      this.isGetData = true
    })
  }
  selectData(e){
    console.log(e)
  }

}
