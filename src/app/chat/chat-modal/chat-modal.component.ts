import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.css']
})
export class ChatModalComponent implements OnInit {
  isChatModalVisible:boolean = false;
  selectTemplate:TemplateRef<any>;
  value;
  planList = [
    {name:"tdy",label:"洪琬馨"},
    {name:"hwx",label:"唐頔颖"},
    {name:"tyh",label:"tyh"},
  ]
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];
  singleValue = 'a10';
  constructor(
    public router:Router
  ) { }
  ngOnInit() {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
  showChatModal(){
    this.isChatModalVisible = true;
  }
  handleCancel(){
    this.isChatModalVisible = false;
  }
  handleOk(){
    this.isChatModalVisible = false;
  }
  changeRoute(url){
    this.router.navigateByUrl(url)
  }
  onInput(e){
    console.log(e)
    this.value = e
  }
  obblur(e){
    console.log(this.value)

  }
  listDataMap = {
    eight: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

}
