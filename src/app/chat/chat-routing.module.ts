import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatUserComponent } from './chat-user/chat-user.component';

const routes: Routes = [
  {path:"message",component:ChatMessageComponent},
  {path:"user",component:ChatUserComponent},
  {
    path: '',
    redirectTo: 'message',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
