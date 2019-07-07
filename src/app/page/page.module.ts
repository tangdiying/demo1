import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { ScrollComponent } from './scroll/scroll.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  NZ_I18N, zh_CN, NzSpinModule } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
@NgModule({
  declarations: [ScrollComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzSpinModule
  ],
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  exports:[ScrollComponent]
})
export class PageModule { }
