import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import {OverlayModule, OverlayContainer, FullscreenOverlayContainer} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import { Demo7Component } from './demo7/demo7.component';
import { SquireSecletComponent } from './squire-seclet/squire-seclet.component';
import { Demo8Component } from './demo8/demo8.component';
import { Demo9Component } from './demo9/demo9.component';
import { ResizeComponent } from './resize/resize.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { Demo10Component } from './demo10/demo10.component';
import { Demo11Component } from './demo11/demo11.component';
import { CanDeactivateGuard } from './candeactivate';
@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    Demo7Component,
    SquireSecletComponent,
    Demo8Component,
    Demo9Component,
    ResizeComponent,
    Demo10Component,
    Demo11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    HttpClientModule,
    DragDropModule,
    OverlayModule,
    PortalModule,
    NzSpinModule
  ],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer},CanDeactivateGuard],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
