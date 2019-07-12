import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo3Component } from './demo3/demo3.component';
import { CanDeactivateGuard } from './candeactivate';
const routes: Routes = [
  {path:"demo4",component:Demo4Component,canDeactivate:[CanDeactivateGuard]},
  {path:"demo5",component:Demo5Component,canDeactivate:[CanDeactivateGuard]},
  {path:"demo3/demo7",component:Demo3Component,canDeactivate:[CanDeactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
