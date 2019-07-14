import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cascader',
  templateUrl: './cascader.component.html',
  styleUrls: ['./cascader.component.css']
})
export class CascaderComponent implements OnInit,OnDestroy {
  @Input() dataList = []
  expend:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.expend = !this.expend;
  }
  ngOnDestroy(){
    console.log("destory")
  }
}
