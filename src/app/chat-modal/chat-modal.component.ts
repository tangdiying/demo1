import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.css']
})
export class ChatModalComponent implements OnInit {
  isChatModalVisible:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showChatModal(){
    this.isChatModalVisible = true
  }
  handleChatModalCancel(){
    this.isChatModalVisible = false
  }
  handleChatModalOk(){
    this.isChatModalVisible = false
  }
}
