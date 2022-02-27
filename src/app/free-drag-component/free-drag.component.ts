import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import {CdkDragDrop } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
   }

  ngOnInit(): void {
    this.getDataDragDrop();
  }

  getItemsData(){
    return this.items; 
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
      return this.dataArray;
    }
  }

    dragStartedHandler(event:any,object:any,index:any){
      object.xPosition = event.source._dragRef._activeTransform.x;
      object.yPosition = event.source._dragRef._activeTransform.y;      
    }

    dragEnded(event:any,object:any,index:any) {
      const { offsetLeft, offsetTop } = event.source.element.nativeElement;
      const { x, y } = event.distance;      
      object.xPosition = offsetLeft + x;
      object.yPosition = offsetTop + y;
      this.items.forEach(element => {
      this.itemObject.id = element.id;
      this.itemObject.title = element.title;
      this.itemObject.tag = element.tag;
      this.itemObject.xPosition = element.xPosition;
      this.itemObject.yPosition = element.yPosition;
      });
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
        this.returnToDefaultPosition(object.xPosition,object.yPosition,index);
  }

    saveToLocalStorage(){
      const items = JSON.stringify(this.items)
      localStorage.setItem('itemArray', items);
    }

    returnToDefaultPosition(xPosition:any,yPosition:any,index:any) {
      var overlap = !(xPosition < this.dragPosition.x || yPosition > this.dragPosition.y);
      var overlap1 = (xPosition > this.dragPosition.x || yPosition < this.dragPosition.y);
      if (overlap){
        alert('Can not place here');
        window.location.reload();
      } else if (overlap1){
        alert('can not move overlap1');
        window.location.reload();
      } else{
        alert('No overlap');
      }      
    }
}
