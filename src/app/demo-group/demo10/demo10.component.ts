import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from "lodash"
import { delay, distinctUntilChanged, distinct, throttleTime, throttle } from 'rxjs/operators';
import { SubjectService } from '../subject/subject.service';
@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.css']
})
export class Demo10Component implements OnInit,OnChanges{
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(changes.hasOwnProperty("items")){
      console.log(changes)
      this.getSignal = true;
    }
  }
  @ViewChild("pageContainer") pageContainer:ElementRef;
  @Input() limit:number = 20;
  // items = []
  isBottomLoading:boolean = false;
  isTopLoading:boolean = false;
  reachBottom:boolean = false;
  reachTop:boolean = false;
  reachBottompadding:number = 0;
  reachToppadding:number = 0;
  page:number = 1;
  topSetTimeout;
  topWaitSetTimeout;
  bottomSetTimeout;
  bottomWaitSetTimeout;
  getSignal:boolean=false;
  @Input() doMoreData;
  @Input() items = []
  @Output() pageIndexChange = new EventEmitter<any>();
  @Output() getres = new EventEmitter<any>();
  @Output() afterReachBottom = new EventEmitter<any>();
  @Input() wrapClass = "page"
  constructor(
    private http:HttpClient,
    private service:SubjectService
  ) { }

  ngOnInit() {
    // this.getData()
    this.bind()

  }
  getData(){
    // this.doMoreData().subscribe(res=>{
    //   this.getres.emit(res)
    //   this.pageIndexChange.emit(this.page)
    //   this.page++;
    // })
  }
  bind(){
    let  dom = this.pageContainer.nativeElement;
    dom.classList.add(this.wrapClass)
    dom.addEventListener("scroll",(e)=>{
      if(e["srcElement"]['scrollTop']+e["srcElement"]['clientHeight']+10>e["srcElement"]['scrollHeight']){
        this.reachBottom = true
      }
      if(e["srcElement"]['scrollTop']==0){
        this.reachTop = true;
      }
    })
    dom.addEventListener("wheel",(e)=>{
      this.scrollReachTop(e)
      this.scrollReachBottom(e)
      
    })
  }
  scrollReachTop(e){
    if(this.reachTop&&e.deltaY<0){
      if(this.reachToppadding<=30){
        clearTimeout(this.topWaitSetTimeout)
        this.reachToppadding++;
        this.topWaitSetTimeout = setTimeout(() => {
          this.reachToppadding = 0;
        }, 500);
      }
      if(this.reachToppadding>=30){
        clearTimeout(this.topWaitSetTimeout)
        clearTimeout(this.topSetTimeout)
        this.isTopLoading = true
        this.topSetTimeout = setTimeout(() => {
          this.isTopLoading = false;
          this.reachToppadding = 0;
        }, 1000);
      }
    }
  }
  scrollReachBottom(e){
    // console.log(this.reachBottompadding,this.reachBottom)
    if(this.reachBottom&&e.deltaY>0){
      if(this.reachBottompadding<30){
        clearTimeout(this.bottomWaitSetTimeout)
        this.reachBottompadding++;
        this.bottomWaitSetTimeout = setTimeout(() => {
          this.reachBottompadding = 0;
        }, 500);
      }
      if(this.reachBottompadding>=30){
        clearTimeout(this.bottomWaitSetTimeout)
        this.isBottomLoading = true;
        this.afterReachBottom.emit();
        if(this.getSignal){
          this.isBottomLoading = false;
          this.reachBottom = false;
          this.reachBottompadding = 0;
          this.getSignal = false;
        }
        // this.doMoreData()
        // .pipe(throttleTime(1000))
        // .subscribe(res=>{
        //   this.getres.emit(res)
        //   this.isBottomLoading = false;
        //   this.reachBottom = false;
        //   this.reachBottompadding = 0;
        //   this.pageIndexChange.emit(this.page)
        //   this.page++;
        // })
      }
  }
  }
}
