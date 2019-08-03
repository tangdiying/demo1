import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRouterRoutingModule } from './demo-router-routing.module';
import { DemoEntryComponent } from './demo-entry/demo-entry.component';
import { DemoChild1Component } from './demo-child1/demo-child1.component';

@NgModule({
  declarations: [DemoEntryComponent, DemoChild1Component],
  imports: [
    CommonModule,
    DemoRouterRoutingModule
  ],
  exports:[DemoEntryComponent]
})
export class DemoRouterModule { }
