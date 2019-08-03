import { Component, OnInit } from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.css']
})
export class Demo7Component implements OnInit {

  constructor(private overlay:Overlay) { }

  ngOnInit() {
    const overlaydemo = this.overlay.create({
      height:"400px",
      width:"600px"
    })
  }

}
