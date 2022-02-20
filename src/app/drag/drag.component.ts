import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DragService } from './drag.service';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  todo:any;
  done:any;
  response:any
  constructor(private dragService:DragService ) { }

  ngOnInit(): void {
    this.getMoveItemData();
    this.getTransferItemData();
  }

  getMoveItemData() {
    this.dragService.getMoveItem().subscribe(res => {
      this.done = res
    });
  }

  getTransferItemData() {
    this.dragService.getTransferItem().subscribe(res => {
      this.todo = res
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);
      this.dragService.saveTransferItem(event.container.data).subscribe(res=> 
        this.response= res
      )
    }
  }

}
