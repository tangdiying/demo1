import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import * as _ from 'lodash'
import { element } from '@angular/core/src/render3';
import { unwrapResolvedMetadata } from '@angular/compiler';
@Component({
  selector: 'app-cascader',
  templateUrl: './cascader.component.html',
  styleUrls: ['./cascader.component.css']
})
export class CascaderComponent implements OnInit,OnDestroy {
  @Input() dataList = []
  mydata = []
  constructor() { }

  ngOnInit() {
    this.renderDepth(this.dataList)
    this.initData(this.dataList)
    
  }
  ngOnDestroy(){
    console.log("destory")
  }
  depth = 0;
  maxdepth = 0;
  renderDepth(data){
    if(data.length==0){
      return;
    }
    this.maxdepth++;
    data.forEach(element => {
      element['depth'] = this.maxdepth
      if(element.hasOwnProperty("children")){
        return this.renderDepth(element['children'])
      }else{
        if(this.depth<=this.maxdepth){
          this.depth = this.maxdepth
        }
      }
    });
    this.maxdepth--
  }
  initData(data){
    if(data.length==0){
      return;
    }
    let pushData = []
    data.forEach(element=>{
      pushData.push(element)
    })
    this.mydata.push(pushData)
    if(data[0].hasOwnProperty("children")){
      return this.initData(data[0]['children'])
    }
    this.mydata.length = this.depth
  }
  renderData(col,row,el){//点击每项，后续列展示子元素
    let curdata = this.mydata[col][row]
    this.colData(col,row,curdata)
  }
  repeatData(col,el){
    if(el.hasOwnProperty("children")){
      this.mydata[col+1] = el['children'];
      return this.repeatData(col+1,el['children'][0])
    }else{
      return;
    }
  }
  colData(col,row,data){
    if(!data){
      return;
    }
    if(data.hasOwnProperty("children")){
      this.mydata[col+1] = data['children']
      return this.colData(col+1,0,data['children'][0])
    }else if(col<this.depth-1){
      this.mydata[col+1] = [];
      if(col+1!=this.depth-1){
        return this.colData(col+1,0,[])
      }
    }
  }
}
