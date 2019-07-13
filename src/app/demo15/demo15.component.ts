import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-demo15',
  templateUrl: './demo15.component.html',
  styleUrls: ['./demo15.component.css']
})
export class Demo15Component implements OnInit {

  constructor(private dragulaService: DragulaService) {
    this.dragulaService.createGroup("COLUMNS", {
      direction: 'horizontal',
      moves: (el, source, handle) => handle.className === "group-handle"
    });
  }

  public groups:Array<any> = [
    {
      name: 'Group A',
      items: [{name: 'Item A'}, {name: 'Item B'}, {name: 'Item C'}, {name: 'Item D'}]
    },
    {
      name: 'Group B',
      items: [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}, {name: 'Item 4'}]
    }
  ];
  vampires = [
    {name:"tdy1",favouriteColor:"apple"},
    {name:"tdy2",favouriteColor:"apple"},
    {name:"tdy3",favouriteColor:"apple"}
  ]
  ngOnInit() {
    // this.dragulaService.drop("COLUMNS").subscribe(res=>{
    //   console.log(res)
    // })
    // this.dragulaService.drag("COLUMNS").subscribe(res=>{
    //   console.log(res)
    // })
    this.dragulaService.dragend("COLUMNS").subscribe(res=>{
      console.log(res)
    })
  }

}
