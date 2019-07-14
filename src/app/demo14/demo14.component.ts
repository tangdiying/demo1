import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html',
  styleUrls: ['./demo14.component.css']
})
export class Demo14Component implements OnInit {
  moves = [
    {data:[{name:"demo1"},{name:"demo2"},{name:"demo3"}],enter:true},
    {data:[{name:"demo4"},{name:"demo5"},{name:"demo6"}],enter:true},
    {data:[{name:"demo7"},{name:"demo8"},{name:"demo9"}],enter:true}
  ]
  isChange:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }
  drop(event: CdkDragDrop<string[]>) {
    // if()
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
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
}
