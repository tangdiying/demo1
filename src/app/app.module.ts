import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { Demo12Component } from './demo12/demo12.component';
import { FormsModule } from '@angular/forms';
import { DragGroupComponent } from './drag-group/drag-group.component';
import { Demo13Component } from './demo13/demo13.component';
import { Demo14Component } from './demo14/demo14.component';
import {ChatModalComponent} from './chat/chat-modal/chat-modal.component';
import { Demo15Component } from './demo15/demo15.component'
import { DragulaModule } from 'ng2-dragula';
import { CascaderComponent } from './cascader/cascader.component';
import { Demo16Component } from './demo16/demo16.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalComponent } from './modal/modal.component';
import { NoopInterceptorService } from './subject/noop-interceptor.service';
import { Demo17Component } from './demo17/demo17.component';
import { NzTableModule } from 'ng-zorro-antd';
import { Demo18Component } from './demo18/demo18.component';

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
    Demo11Component,
    Demo12Component,
    DragGroupComponent,
    Demo13Component,
    Demo14Component,
    Demo15Component,
    CascaderComponent,
    Demo16Component,
    ModalComponent,
    Demo17Component,
    Demo18Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    HttpClientModule,
    DragDropModule,
    OverlayModule,
    PortalModule,
    NzSpinModule,
    NzAutocompleteModule,
    FormsModule,
    DragulaModule.forRoot(),
    NzModalModule,
    NzTableModule
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer},
    CanDeactivateGuard,
    {provide:HTTP_INTERCEPTORS,useClass:NoopInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
