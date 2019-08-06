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
  // @Input() doMoreData;
  @Input() items = []//容器里面的数据，并没有什么用，只是用来转换检测数据变化的
  @Input() wrapHeight = 100;//容器的高度
  @Input() isGetData:boolean = false;
  @Output() isGetDataChange = new EventEmitter<any>()
  // @Output() pageIndexChange = new EventEmitter<any>();
  // @Output() getres = new EventEmitter<any>();
  @Output() afterReachBottom = new EventEmitter<any>();//到达底部后向外发送信号,需要获取页面数据
  constructor(
    private http:HttpClient,
    private service:SubjectService
  ) { }

  ngOnInit() {
    // this.getData()
    this.bind()

  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {//检测到数据变化，如果数据变化，底部花花就消失
    // if(changes.hasOwnProperty("items")){
    //   console.log(changes)
    //   this.getSignal = true;
    // }
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
    console.log(this.isGetData)
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
        clearTimeout(this.bottomSetTimeout)
        this.isBottomLoading = true;
        this.afterReachBottom.emit();
        if(this.isGetData){
          this.isBottomLoading = false;
          this.reachBottom = false;
          this.reachBottompadding = 0;
          this.isGetData = false
          this.isGetDataChange.emit(this.isGetData)
          // this.getSignal = false;
        }
        this.bottomSetTimeout = setTimeout(() => {
          this.isBottomLoading = false;
          this.reachBottom = false;
          this.reachBottompadding = 0;
          // this.getSignal = false;
        }, 3000);
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
