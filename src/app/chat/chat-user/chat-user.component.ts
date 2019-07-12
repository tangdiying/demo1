import { Component, OnInit, OnDestroy } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';
import { userinfoData } from '../chatmenu';
@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit,OnDestroy {
  searchValue = '';
  userinfoDataColumn = userinfoData;
  userinfoData:Array<any> = []
  nodes = [
    {
      title: '0-0',
      key: '0-0',
      isLeaf: true
    },
    {
      title: '0-2-3',
      key: '0-1',
      isLeaf: true
    },
    {
      title: '0-2-3',
      key: '0-1',
      isLeaf: true
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){
    console.log("123")
  }

}
