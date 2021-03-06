import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import * as _ from "lodash"
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-demo15',
  templateUrl: './demo15.component.html',
  styleUrls: ['./demo15.component.css']
})
export class Demo15Component implements OnInit {
  subs = new Subscription();
  constructor(private dragulaService: DragulaService) {
    this.dragulaService.createGroup("COLUMNS", {
      direction: 'horizontal',
      moves: (el, source, handle) => handle.className === "group-handle"
    });
    // this.subs.add(this.dragulaService.removeModel("ITEMS")
    //   .subscribe((res) => {
    //     console.log(res)
    //   })
    // );
    this.subs.add(this.dragulaService.dropModel("COLUMNS")
      .subscribe((res) => {
        console.log(res)
      })
    );
  }

  public groups:Array<any> = [
    {
      name: 'Group A',
      items: [{name: 'Item A'}, {name: 'Item B'}, {name: 'Item C'}, {name: 'Item D'}]
    },
    {
      name: 'Group B',
      items: [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}, {name: 'Item 4'}]
    },
    {
      name: 'Group C',
      items: [{name: 'Item *1'}, {name: 'Item *2'}, {name: 'Item *3'}, {name: 'Item *4'}]
    },
    {
      name: 'Group D',
      items: [{name: 'Item ~1'}, {name: 'Item ~2'}, {name: 'Item ~3'}, {name: 'Item ~4'}]
    }
  ];
  ngOnInit() {
    this.subs.add(this.dragulaService.drag("VAMPIRES")
      .subscribe(({ name, el, source }) => {
        console.log(name,el,source)
      })
    );
    // this.dragulaService.drop("COLUMNS").subscribe(res=>{
    //   console.log(res)
    // })
    // this.dragulaService.drag("COLUMNS").subscribe(res=>{
    //   console.log(res)
    // })
    // this.dragulaService.dragend("COLUMNS").subscribe(res=>{
    //   console.log(res)
    // })
    // this.dragulaService.
  }
  additem(group){
    let index = _.findIndex(this.groups,group)
    this.groups[index]['items'].push({"name":"tdy"})
  }
  dragstart(e){
    console.log(e)
  }
}
