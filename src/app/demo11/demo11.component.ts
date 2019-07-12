import { Component, OnInit, Output, Input, EventEmitter, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { of } from 'rxjs';
import { takeUntil, takeWhile, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.css']
})
export class Demo11Component implements OnInit,AfterViewInit,OnChanges {
  @Output() shiyan
  callbacks = []
  @Input() demo1:boolean = false;
  @Output() demo1Change:EventEmitter<any> = new EventEmitter()
  @Input() demo3
  @ViewChild("panel") panel1
  @ViewChild("con", {read: ViewContainerRef}) con:ViewContainerRef
  @ViewChild("tem") tem:TemplateRef<any>
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.callbacks = [this.demo3()]
    Promise.all(this.callbacks).then(()=>{
      console.log("ok")
    },()=>{
      console.log("error")
    })
    console.log(this.panel1)
    
    // of(this.demo1)
    // .pipe(filter(res=>res===true))
    // .subscribe(res=>{
    //   console.log(res)
    // })
    // console.log(this.demo3)
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("change")
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let view = this.tem.createEmbeddedView(null)
    this.con.insert(view)
  }
  shiyan2(){
    return new Promise(resolve=>{
      // if(this.demo1){
        
      // }
      setTimeout(() => {
        resolve();
      }, 2000);
    })
  }
}
