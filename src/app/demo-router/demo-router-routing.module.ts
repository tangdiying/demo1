import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoEntryComponent } from './demo-entry/demo-entry.component';
import { DemoChild1Component } from './demo-child1/demo-child1.component';

const routes: Routes = [
  {
    path:"",
    component:DemoEntryComponent,
    children:[
      {path:"child1",component:DemoChild1Component}
    ]
  },
  {
    path:"child1",
    component:DemoChild1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRouterRoutingModule { }
