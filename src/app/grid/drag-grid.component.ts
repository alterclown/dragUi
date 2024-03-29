import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import {CdkDragDrop } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-drag-grid',
  templateUrl: './drag-grid.component.html',
  styleUrls: ['./drag-grid.component.css']
})


export class DragGridComponent implements OnInit{
  public options: GridsterConfig;
  public items: any;
  dataArray:any[]=[]

  constructor() {
  this.items = [
   
    { id: 1, title: "table", tag: "table", x: 0, y:0 },
    { id: 2, title: "graph", tag: "graph", x: 0, y:0},
    { id: 3, title: "barchart", tag: "barchart", x: 0, y:0},
    { id: 4, title: "content", tag: "content", x: 0, y:0},
    { id: 5, title: "card", tag: "card", x: 0, y:0}
  ];



    this.options = {
      margin:10,
      pushItems: true,
      minCols: 15,
      // maxCols: Infinity,
      minRows: 30,
      maxRows: Infinity,
      // fixedRowHeight: 120,
      setGridSize: false,
      mobileBreakpoint: 0,
      gridType: 'fit',
      outerMargin:true,
      outerMarginTop:30,
      outerMarginRight:30,
      outerMarginLeft:30,
      outerMarginBottom: 30,
      resizable: {
          enabled: true
      },
      draggable: {
          enabled: true
      },
      displayGrid:'none'
   };
}

  ngOnInit(): void {
    this.getDataDragDrop();
  }

  saveTo(){
    const items = JSON.stringify(this.items)
    localStorage.setItem('itemArray', items);
  }

  getDataDragDrop(){
    let array= JSON.parse(localStorage.getItem('itemArray') || '[]');
    this.dataArray = array as any;
    
    if (this.dataArray === null){
        return this.items;
    }
    else {
      return this.dataArray;
    }
  }
}
