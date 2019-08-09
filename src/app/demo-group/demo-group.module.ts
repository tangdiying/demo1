import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoGroupRoutingModule } from './demo-group-routing.module';
import { GroupEntryComponent } from './group-entry/group-entry.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {OverlayModule, OverlayContainer, FullscreenOverlayContainer} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd';
import { NoopInterceptorService } from './subject/noop-interceptor.service';
import { Demo10Component } from './demo10/demo10.component';
import { SubjectService } from './subject/subject.service';
import { SquireSecletComponent } from './squire-seclet/squire-seclet.component';
import { SelectDataComponent } from './select-data/select-data.component';
@NgModule({
  declarations: [GroupEntryComponent,Demo10Component,SquireSecletComponent, SelectDataComponent],
  imports: [
    CommonModule,
    DemoGroupRoutingModule,
    DragDropModule,
    OverlayModule,
    PortalModule,
    NzSpinModule,
    FormsModule,
    NzAutocompleteModule,
    NzModalModule,
    NzTableModule,
    HttpClientModule,
    DragulaModule.forRoot(),
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer},
    {provide:HTTP_INTERCEPTORS,useClass:NoopInterceptorService,multi:true},
    SubjectService
  ],
  exports:[GroupEntryComponent,SquireSecletComponent,SelectDataComponent]
})
export class DemoGroupModule { }
