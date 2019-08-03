import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html',
  styleUrls: ['./demo14.component.css']
})
export class Demo14Component implements OnInit {
  moves = [
    {data:[{name:"demo1"},{name:"demo2"},{name:"demo3"}],enter:true,name:"index1"},
    {data:[{name:"demo4"},{name:"demo5"},{name:"demo6"}],enter:true,name:"index2"},
    {data:[{name:"demo7"},{name:"demo8"},{name:"demo9"}],enter:true,name:"index3"}
  ]
  idName = ['index1','index2','index3']
  isChange:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  dropColunmn(event: CdkDragDrop<string[]>){
    moveItemInArray(this.moves, event.previousIndex, event.currentIndex);
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {//不跨列拖拽数据
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {//跨列拖拽数据
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  exit(e){
    console.log(e)
    this.isChange = false;
  }
  enterStatus(){
    return true;
  }
  noReturnPredicate(){
    return false;
  }
}
