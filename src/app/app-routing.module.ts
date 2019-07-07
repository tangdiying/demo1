import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"chat",loadChildren:"./chat-modal/chat-modal.module#ChatModalModule"},
  {path:"page",loadChildren:"./page/page.module#PageModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
