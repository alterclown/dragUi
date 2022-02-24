import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import {CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-free-drag',
  templateUrl: './free-drag.component.html',
  styleUrls: ['./free-drag.component.css']
})


export class FreeDragComponent implements OnInit{

  isMoved = false;
  dragPosition = {x: 0, y: 0};
  dataArray:any[]=[]

  itemObject: Item = new Item();
  items:Item[] = [
   
    { id: 1, title: "table", tag: "table", xPosition: 0, yPosition:0 },
    { id: 2, title: "graph", tag: "graph", xPosition: 0, yPosition:0},
    { id: 3, title: "barchart", tag: "barchart", xPosition: 0, yPosition:0},
    { id: 4, title: "content", tag: "content", xPosition: 0, yPosition:0},
    { id: 5, title: "card", tag: "card", xPosition: 0, yPosition:0}
  ];

  constructor() {
   }

  ngOnInit(): void {
    this.getDataDragDrop();
  }

  getDataDragDrop(){
    let array= JSON.parse(localStorage.getItem('itemArray') || '[]');
    this.dataArray = array as any;
    
    if (this.dataArray === null){
        return this.items;
    }
    else {
      this.dragPosition.x = this.itemObject.xPosition;
      this.dragPosition.y = this.itemObject.yPosition; 
      // this.dataArray.forEach(element => {
      // this.dragPosition.x = element.xPosition;
      // this.dragPosition.y = element.yPosition; 
      // });
         
      return this.dataArray;
    }
  }

    dragStartedHandler(event:any,object:any,index:any){
      object.xPosition = event.source._dragRef._activeTransform.x;
      object.yPosition = event.source._dragRef._activeTransform.y;
      console.log('fire event',event);
      console.log('value of object',object);
      
    }

    dragEnded(event:any,object:any,index:any) {
     // event.preventDefault();
     //event.stopPropagation();
      const { offsetLeft, offsetTop } = event.source.element.nativeElement;
      const { x, y } = event.distance;      
      object.xPosition = offsetLeft + x;
      object.yPosition = offsetTop + y;
      // this.itemObject.id = object.id;
      // this.itemObject.title = object.title;
      // this.itemObject.tag = object.tag;
      // this.itemObject.xPosition = object.xPosition;
      // this.itemObject.yPosition = object.yPosition;

      this.items.forEach(element => {
      this.itemObject.id = element.id;
      this.itemObject.title = element.title;
      this.itemObject.tag = element.tag;
      this.itemObject.xPosition = element.xPosition;
      this.itemObject.yPosition = element.yPosition;
      });
      console.log('lets see',object);
    }

    dragEnd($event: CdkDragEnd,object:any,index:any) {
      const { x, y } = $event.source.getFreeDragPosition();
      object.xPosition = x;
      object.yPosition = y;
      this.items.forEach(element => {
        this.itemObject.id = element.id;
        this.itemObject.title = element.title;
        this.itemObject.tag = element.tag;
        this.itemObject.xPosition = element.xPosition;
        this.itemObject.yPosition = element.yPosition;
        });

        // if (object)
        console.log('lets see',object);
        console.log($event.source.getFreeDragPosition());
  }

    saveToLocalStorage(){
      const items = JSON.stringify(this.items)
      localStorage.setItem('itemArray', items);
    }
}
