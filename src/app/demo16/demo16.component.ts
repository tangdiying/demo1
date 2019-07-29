import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo16',
  templateUrl: './demo16.component.html',
  styleUrls: ['./demo16.component.css']
})
export class Demo16Component implements OnInit,OnDestroy {
  isVisible = false;
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
        label: '组件交互文档',
        children:[
          {
            value:"lalalal",
            label:"lalallaa"
          }
        ]
    }]
}]
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://192.168.50.18:5000/user/",{observe:"response"})
    .subscribe(res=>{
      console.log(res)
    })
  }
  ngOnDestroy(){
    console.log("destory")
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
