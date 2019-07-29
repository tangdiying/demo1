import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash'
import { Demo10Component } from './demo10/demo10.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo1';
  squareArray = []
  listheight = 600;
  listitemheight = 30
  page:number = 1;
  isBottomLoading:boolean = false;
  items = []
  Demo10Component;
  demo1 = false
  demo3(){

  }

  demo16 = true;
  cascaderData = [{
      value: 'zhinan',
      label: '指南',
      children: [{
        value: 'shejiyuanze',
        label: '设计原则',
        children: [{
            value: 'yizhi',
            label: '一致'
        }, {
            value: 'fankui',
            label: '反馈'
        }, {
            value: 'xiaolv',
            label: '效率'
        }, {
            value: 'kekong',
            label: '可控'
        }]
      }, 
      {
          value: 'daohang',
          label: '导航',
          children: [{
              value: 'cexiangdaohang',
              label: '侧向导航',
              children:[
                {
                  value:"lalalal",
                  label:"lalallaa"
                }
              ]
          }, {
              value: 'dingbudaohang',
              label: '顶部导航'
          }]
      }]
    },
    {
      value: 'ziyuan',
      label: '资源',
      children: [{
          value: 'axure',
          label: 'Axure Components'
      }, {
          value: 'sketch',
          label: 'Sketch Templates'
      }, {
          value: 'jiaohu',
          label: '组件交互文档'
      }]
  }]
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    for(let i=0;i<20;i++){
      this.squareArray.push(i)
    }
  }
  doMoreData(){
    return this.http.get("http://localhost:8000/getdata?page="+this.page+"&limit=20")
  }
  pageIndexChange(e){
    this.page = e;
    // console.log(e)
  }
  getres(res){
    this.items = _.concat(this.items,res['data'])
    // console.log(res)
  }
  demo2(){
    this.demo1 = !this.demo1
  }
}
