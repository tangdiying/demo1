import { Component, OnInit } from '@angular/core';
import { gossipdata } from './../chatdata';
@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  gossipdata = gossipdata
  constructor() { }

  ngOnInit() {
  }

}
