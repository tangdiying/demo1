import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-demo13',
  templateUrl: './demo13.component.html',
  styleUrls: ['./demo13.component.css']
})
export class Demo13Component implements OnInit {
  movies = [
    'Episode I - The Phantom Menace' ,
     'Episode II - Attack of the Clones' ,
     'Episode III - Revenge of the Sith' ,
     'Episode IV - A New Hope' ,
     'Episode V - The Empire Strikes Back' ,
     'Episode VI - Return of the Jedi' ,
     'Episode VII - The Force Awakens' ,
     'Episode VIII - The Last Jedi'
  ];

  drop(event: CdkDragDrop< string []>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  constructor() { }

  ngOnInit() {
  }

}
