import { Component, OnInit, ViewContainerRef, ViewChild, OnDestroy } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.css']
})
export class Demo8Component implements OnInit,OnDestroy {
  private overlayRef: OverlayRef;
  private portal: TemplatePortal;
  isMoveVisible:boolean = false;
  @ViewChild("panel") dialogTemplate
  constructor(
    public overlay:Overlay,
    public viewContainerRef: ViewContainerRef
    ) { }

  ngOnInit() {
    // this.move()
  }
  openWindow(){
    this.portal = new TemplatePortal(this.dialogTemplate, this.viewContainerRef);
    this.overlayRef = this.overlay.create({
      positionStrategy:this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop:true
    })
    this.overlayRef.backdropClick().subscribe(() => {
        // 点击了backdrop背景
        this.overlayRef.dispose();
    });
    this.overlayRef.attach(this.portal);
  }
  ngOnDestroy(){
    this.overlayRef.dispose()
  }
  isMove(direction,object,){

  }
  // resize(e){
  //   this.isMoveVisible = true;
  //   console.log(e)
  // }
  // reset(){
  //   this.isMoveVisible = false;
  // }
  // move(){
  //   document.addEventListener("mousemove",()=>{
  //     if(this.isMoveVisible){

  //     }
  //   })
  //   document.addEventListener("mouseup",(e)=>{
  //     if(this.isMoveVisible){
  //       console.log(e)
  //       this.reset()
  //     }
  //   })
  // }
}
