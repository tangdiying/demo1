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
  lineCopy;
  constructor() { 
  }

  ngOnInit() {
    this.bind()
    this.container.nativeElement.classList.add(this.containerClass)
    this.body.nativeElement.classList.add(this.containerBodyClass)
    this.line.nativeElement.classList.add(this.lineClass)
  }
  bind(){
    document.addEventListener("mousedown",(e)=>{
      this.pauseEvent(e)
      this.clearChild()
      this.oldPosition.x = e.clientX;
      this.oldPosition.y = e.clientY;
      if(!this.isDraw){
        this.isDraw = true;
      }
      this.lineStyle = {
        // "left":this.oldPosition.x + "px",
        // "top":this.oldPosition.y + "px",
        "width":"0px",
        "height":"0px"
      }
      this.lineCopy = {
        "width":0,
        "height":0
      }
      // this.lineCopy.width = 0;
      // this.lineCopy.height = 0;
    })
    document.addEventListener("mousemove",(e)=>{
      if(this.isDraw){
        this.nowPosition.x = e.clientX;
        this.nowPosition.y = e.clientY;
        // this.lineStyle = {
        //   "left":this.oldPosition.x + "px",
        //   "top":this.oldPosition.y + "px",
        //   "width":this.nowPosition.x - this.oldPosition.x + "px",
        //   "height":this.nowPosition.y - this.oldPosition.y + "px"
        // }
        this.lineStyle.width=Math.abs(this.nowPosition.x-this.oldPosition.x)+"px";
        this.lineStyle.height=Math.abs(this.nowPosition.y-this.oldPosition.y)+"px";
        this.lineCopy.width = Math.abs(this.nowPosition.x-this.oldPosition.x);
        this.lineCopy.height = Math.abs(this.nowPosition.y-this.oldPosition.y);
        if(this.nowPosition.x>this.oldPosition.x){
          this.lineStyle.left = this.oldPosition.x+"px";
          this.lineCopy.left = this.oldPosition.x;
        }else{
          this.lineStyle.left = this.oldPosition.x - (Math.abs(this.nowPosition.x-this.oldPosition.x))+"px";
          this.lineCopy.left = this.oldPosition.x - (Math.abs(this.nowPosition.x-this.oldPosition.x))
        }
        if(this.nowPosition.y>this.oldPosition.y){
          this.lineStyle.top = this.oldPosition.y+"px"
          this.lineCopy.top = this.oldPosition.y
        }else{
          this.lineStyle.top = this.oldPosition.y - (Math.abs(this.nowPosition.y-this.oldPosition.y))+"px"
          this.lineCopy.top = this.oldPosition.y - (Math.abs(this.nowPosition.y-this.oldPosition.y))
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
      if(children[i]['offsetLeft']+children[i]['clientWidth']>this.lineCopy.left&&children[i]['offsetTop']+children[i]['clientHeight']>this.lineCopy.top&&children[i]['offsetLeft']<(this.lineCopy.left+this.lineCopy.width)&&children[i]['offsetTop']<(this.lineCopy.top+this.lineCopy.height)){
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
