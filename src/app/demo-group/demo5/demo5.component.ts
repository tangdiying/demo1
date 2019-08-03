import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.css']
})
export class Demo5Component implements OnInit {
  todo = [
    {label:"tdy",age:18},
    {label:"hwx",age:15}
  ]
  done = [
    {label:"lwt",age:18},
    {label:"tyh",age:15}
  ]
  done1 = [
    {label:"txk",age:78},
    {label:"lyx",age:18}
  ]
  lists = [
    [
      {label:"tdy",age:18},
      {label:"hwx",age:15}
    ],
    [
      {label:"lwt",age:18},
      {label:"tyh",age:15}
    ],
    [
      {label:"txk",age:78},
      {label:"lyx",age:18}
    ]
  ]
  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    console.log(event.previousContainer,event.container)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log(this.lists)
  }
  constructor() { }

  ngOnInit() {
  }

}
