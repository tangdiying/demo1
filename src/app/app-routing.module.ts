import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"group",loadChildren:"./demo-group/demo-group.module#DemoGroupModule"},
  {path:"router",loadChildren:"./demo-router/demo-router.module#DemoRouterModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
