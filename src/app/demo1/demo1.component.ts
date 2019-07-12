import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  items:Array<any> = []
  constructor(
    public http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get("http://localhost:8000/getdata?page=1&limit=50")
    .subscribe(res=>{
      this.items = res['data']
    })
  }

}
