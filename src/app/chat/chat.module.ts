import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatModalComponent } from './chat-modal/chat-modal.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { ChatRecordComponent } from './chat-record/chat-record.component';
import { ChatContentComponent } from './chat-content/chat-content.component';
registerLocaleData(zh);
@NgModule({
  declarations: [ChatModalComponent, ChatMessageComponent, ChatUserComponent, ChatRecordComponent, ChatContentComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  exports:[ChatModalComponent]
})
export class ChatModule { }
