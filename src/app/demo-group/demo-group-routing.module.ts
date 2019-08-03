import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupEntryComponent } from './group-entry/group-entry.component';

const routes: Routes = [
  {path:"",component:GroupEntryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoGroupRoutingModule { }
