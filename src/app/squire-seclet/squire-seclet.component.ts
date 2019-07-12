import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-squire-seclet',
  templateUrl: './squire-seclet.component.html',
  styleUrls: ['./squire-seclet.component.css']
})
export class SquireSecletComponent implements OnInit {
  @Input() containerClass //最外层div的类名
  @Input() containerBodyClass //直接包裹元素的类名
  // @Input() contentTemplate:TemplateRef<any> //传入的模板，里面是由数据生成的元素
  @Input() selectClass = "select" //当标签被选中时添加的类名，最好不要与其他部分的类重名
  @Input() lineClass = "line"
  @ViewChild("container") container
  @ViewChild("body") body
  @ViewChild("line") line
  // @ViewChild("child") child
  oldPosition = {
    x:0,
    y:0
  }
  nowPosition = {
    x:0,
    y:0
  }
  div;
  isDraw = false;
  lineStyle;
  constructor() { 
  }

  ngOnInit() {
    this.bind()
    this.container.nativeElement.classList.add(this.containerClass)
    this.body.nativeElement.classList.add(this.containerBodyClass)
    this.line.nativeElement.classList.add(this.lineClass)
  }
  bind(){
    this.container.nativeElement.addEventListener("mousedown",(e)=>{
      this.pauseEvent(e)
      this.clearChild()
      this.oldPosition.x = e.clientX;
      this.oldPosition.y = e.clientY;
      if(!this.isDraw){
        this.isDraw = true;
      }
      this.lineStyle = {
        "left":this.oldPosition.x + "px",
        "top":this.oldPosition.y + "px",
        "width":"0px",
        "height":"0px"
      }
    })
    document.addEventListener("mousemove",(e)=>{
      if(this.isDraw){
        this.nowPosition.x = e.clientX;
        this.nowPosition.y = e.clientY;
        this.lineStyle = {
          "left":this.oldPosition.x + "px",
          "top":this.oldPosition.y + "px",
          "width":this.nowPosition.x - this.oldPosition.x + "px",
          "height":this.nowPosition.y - this.oldPosition.y + "px"
        }
      }
      
    })
    document.addEventListener("mouseup",(e)=>{
      if(this.isDraw){
        this.isDraw = false;
      }
      this.selectChild()
      this.resetPosition();
    })
  }
  selectChild(){
    let children = this.body.nativeElement.children
    for(let i=0;i<children.length;i++){
      if(children[i]['offsetLeft']+children[i]['clientWidth']>this.oldPosition.x&&children[i]['offsetTop']+children[i]['clientHeight']>this.oldPosition.y&&children[i]['offsetLeft']<this.nowPosition.x&&children[i]['offsetTop']<this.nowPosition.y){
        children[i].classList.add(this.selectClass)
      }
    }

  }
  resetPosition(){
    this.oldPosition.x = 0;
    this.oldPosition.y = 0;
    this.nowPosition.x = 0;
    this.nowPosition.y = 0;
  }
  clearChild(){
    for(let i = 0;i<this.body.nativeElement.children.length;i++){
      let t =this.body.nativeElement.children[i]
            t.classList.remove(this.selectClass)
    }
  }
  pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
  }
}
