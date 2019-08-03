import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { filter, distinct, scan, map, pairwise, debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import _ from 'lodash'

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.css']
})
export class Demo9Component implements OnInit {
  @ViewChild("container") containerChild:ElementRef;
  @Input()listheight
  @Input()listitemheight
  listitemcount = 0;
  page = 1;
  limit = 0;
  items = [];
  isBottomLoading:boolean = false;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let content = document.getElementsByClassName("container")[0]
    this.limit = Math.ceil(this.listheight/this.listitemheight)
    //页码的流
    let pageSouce$ = fromEvent(this.containerChild.nativeElement,"scroll")
    .pipe(map(item=>item['srcElement']['scrollTop']))
    .pipe(distinct())
    .pipe(map(item=>Math.ceil(item/this.listheight)),distinct(),filter(item=>item!=0))
    // .subscribe(res=>{
    //   console.log(res)
    // })
    let getData$ = pageSouce$.pipe(mergeMap(event=>{
      this.page = event;
      console.log(event)
      return this.http.get("http://localhost:8000/getdata?page="+(event+1)+"&limit="+this.limit)
    }))
    getData$.subscribe(res=>{
      console.log(res)
      if(res['code']==0){
        this.items = _.concat(this.items,res['data'])
        console.log(this.items)
      }
    })
    this.http.get("http://localhost:8000/getdata?page="+this.page+"&limit="+this.limit).subscribe(res=>{
      if(res['code']==0){
        this.listitemcount = res['count']
        this.items = res['data']
      }
    })
  }
  domore(page,limit){
    this.http.get(`http://localhost:8000/getdata?page=${page}&limit=${limit}`).subscribe(res=>{
      if(res['code']==0){
        return res;
      }
    })
  }
  isEnd(scrollTop,clientHeight,scrollHeight){
    if(screenTop+clientHeight+20>scrollHeight){
      return true;
    }
    return false;
  }

}
