import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-select-data',
  templateUrl: './select-data.component.html',
  styleUrls: ['./select-data.component.css']
})
export class SelectDataComponent implements OnInit {

  @Input() containerClass //最外层div的类名
  @Input() containerBodyClass //直接包裹元素的类名
  // @Input() contentTemplate:TemplateRef<any> //传入的模板，里面是由数据生成的元素
  @Input() selectClass = "select" //当标签被选中时添加的类名，最好不要与其他部分的类重名
  @Input() lineClass = "line"
  @Input() dataSource;
  @Input() handleClass;//控制在某个区域内是否可以被框选
  @Output() selectData = new EventEmitter<any>()//返回被选中的数据
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
  isDraw = false;
  lineStyle;
  lineCopy;
  userSelectData = []
  mouseDown;
  mouseMove;
  mouseUp;
  mouseClick;
  isCheckMove:boolean = false;
  constructor() { 
  }

  ngOnInit() {
    this.bind()
    this.container.nativeElement.classList.add(this.containerClass)
    this.body.nativeElement.classList.add(this.containerBodyClass)
    this.line.nativeElement.classList.add(this.lineClass)
  }
  bind(){
    this.mouseDown=fromEvent(document,"mousedown")
    .subscribe(e=>{
      this.pauseEvent(e)
      this.clearChild()
      this.oldPosition.x = e['clientX'];
      this.oldPosition.y = e['clientY'];
      if(!this.isDraw){
        this.isDraw = true;
      }
      this.lineStyle = {
        "width":"0px",
        "height":"0px"
      }
      this.lineCopy = {
        "width":0,
        "height":0
      }
    })
    this.mouseMove=fromEvent(document,"mousemove")
    .subscribe(e=>{
      if(this.isDraw){
        this.isCheckMove = true;
        this.nowPosition.x = e['clientX'];
        this.nowPosition.y = e['clientY'];
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
    this.mouseClick=fromEvent(document,"click")
    .subscribe(e=>{
      if(!this.isCheckMove){
        this.lineCopy.top = e['clientY'];
        this.lineCopy.left = e['clientX'];
      }
      this.isCheckMove = false;
      this.selectChild(e)
      this.resetPosition();
    })
    this.mouseUp=fromEvent(document,"mouseup")
    .subscribe(e=>{
      if(this.isDraw){
        this.isDraw = false;
      }
      // this.selectChild()
      // this.resetPosition();
    })
  }
  selectChild(e){
    let offsetX = e['pageX']-e['clientX'];
    let offsetY = e['pageY']-e['clientY'];
    let children;
    if(this.handleClass){
      children = document.getElementsByClassName(this.handleClass)[0].children
    }else{
      children = this.body.nativeElement.children
    }
    for(let i=0;i<children.length;i++){
      // console.log(children[i]['offsetLeft'],children[i]['offsetTop'],offsetX,offsetY)
      if(children[i]['offsetLeft']+children[i]['clientWidth']-offsetX>this.lineCopy.left&&children[i]['offsetTop']+children[i]['clientHeight']-offsetY>this.lineCopy.top&&children[i]['offsetLeft']-offsetX<(this.lineCopy.left+this.lineCopy.width)&&children[i]['offsetTop']-offsetY<(this.lineCopy.top+this.lineCopy.height)){
        children[i].classList.add(this.selectClass)
        this.userSelectData.push(this.dataSource[i])
      }
    }
    this.selectData.emit(this.userSelectData)
  }
  resetPosition(){
    this.oldPosition.x = 0;
    this.oldPosition.y = 0;
    this.nowPosition.x = 0;
    this.nowPosition.y = 0;
  }
  clearChild(){
    let children;
    if(this.handleClass){
      children = document.getElementsByClassName(this.handleClass)[0].children
    }else{
      children = this.body.nativeElement.children
    }
    for(let i = 0;i<children.length;i++){
      let t =children[i]
      t.classList.remove(this.selectClass)
    }
    this.userSelectData = []
  }
  pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
  }
  cancel(){
    this.mouseDown.unsubscribe();
    this.mouseMove.unsubscribe();
    this.mouseUp.unsubscribe();
    this.mouseClick.unsubscribe();
  }

}
