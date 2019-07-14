import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo16',
  templateUrl: './demo16.component.html',
  styleUrls: ['./demo16.component.css']
})
export class Demo16Component implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){
    console.log("destory")
  }

}
