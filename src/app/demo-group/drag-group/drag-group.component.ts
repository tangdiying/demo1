import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drag-group',
  templateUrl: './drag-group.component.html',
  styleUrls: ['./drag-group.component.css']
})
export class DragGroupComponent implements OnInit {
  timePeriods = [
    'Bronze age111' ,
     'Iron age222' ,
     'Middle ages333' ,
     'Early modern period444' ,
     'Long nineteenth century555'
  ];
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
    moveItemInArray( this.timePeriods, event.previousIndex, event.currentIndex);
  }
  drop1(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    // console.log(this.lists)
  }
  constructor(public http:HttpClient) { }

  ngOnInit() {
  }

}
