import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-drag-event',
  templateUrl: './drag-event.component.html',
  styleUrls: ['./drag-event.component.css']
})


export class DragEventComponent implements OnInit{

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
  }

  onDragStart(evt: any, row: any) {
    evt.dataTransfer.effectAllowed = 'move';
    console.log('check position for event',evt);

    evt.dataTransfer.setData('x-axis', evt.clientX);
    evt.dataTransfer.setData('y-axis', evt.clientY)

  }


  onDragOver(evt: any, object: any) {
    evt.preventDefault();

    object.xPosition = evt.dataTransfer.getData('x-axis');
    object.yPosition = evt.dataTransfer.getData('y-axis');

      // this.items.forEach(element => {
      //   this.itemObject.id = element.id;
      //   this.itemObject.title = element.title;
      //   this.itemObject.tag = element.tag;
      //   this.itemObject.xPosition = element.xPosition;
      //   this.itemObject.yPosition = element.yPosition;
      //   });

        // if (object)
        console.log('lets see object',object);
  }

  onDrop(evt: any, object: any) {
    // const { x, y } = $event.source.getFreeDragPosition();
      object.xPosition = evt.dataTransfer.getData('x-axis');
      object.yPosition = evt.dataTransfer.getData('y-axis');

      this.items.forEach(element => {
        this.itemObject.id = element.id;
        this.itemObject.title = element.title;
        this.itemObject.tag = element.tag;
        this.itemObject.xPosition = element.xPosition;
        this.itemObject.yPosition = element.yPosition;
        });

        // if (object)
        console.log('lets see',object);
        // console.log($event.source.getFreeDragPosition());

  }
  
}
