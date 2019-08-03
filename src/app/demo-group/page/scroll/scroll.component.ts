import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  data:Array<any> = []
  isLoading:boolean = false;
  scrollTop:number=0;
  scrollSpinTimeout;
  padding=0;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.getData()
    this.getDom()
  }
  getData(){
    this.http.get("http://localhost:5000/getdata?page=1&limit=50")
    .subscribe(res=>{
      this.data = res['data']
    })
  }
  getDom(){
    let container = document.getElementsByClassName("container")[0];
    container.addEventListener("scroll",e=>{
      console.log(e['target']['scrollTop'])
      this.scrollTop = e['target']['scrollTop']
    })
    container.addEventListener("wheel",e=>{
      if(this.scrollSpinTimeout){
        clearTimeout(this.scrollSpinTimeout)
      }
      console.log(e['wheelDelta'],e['deltaY'])//wheelDelta正的向上滚，负向下滚
      if(this.scrollTop==0){
        this.isLoading = true
      }
      this.scrollSpinTimeout = setTimeout(() => {
        if(this.isLoading){
          this.reset()
        }
      }, 250);
    })
  }
  reset(){
    this.isLoading = false
  }
}
