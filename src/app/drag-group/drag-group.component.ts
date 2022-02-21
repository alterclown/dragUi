import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-group',
  templateUrl: './drag-group.component.html',
  styleUrls: ['./drag-group.component.css']
})
export class DragGroupComponent implements OnInit {
  groups = [{
    id: 1,
    title: 'Group 1',
    items: [{
      name: 'Item 1 - Group 1'
    },
    {
      name: 'Item 2 - Group 1'
    },
    {
      name: 'Item 3 - Group 1'
    },
    {
      name: 'Item 4 - Group 1'
    }]
  },
  {
    id: 2,
    title: 'Group 2',
    items: [{
      name: 'Item 1 - Group 2'
    },
    {
      name: 'Item 2 - Group 2'
    },
    {
      name: 'Item 3 - Group 2'
    },
    {
      name: 'Item 4 - Group 2'
    }]
  },
  {
    id: 3,
    title: 'Group 3',
    items: [{
      name: 'Item 1 - Group 3'
    },
    {
      name: 'Item 2 - Group 3'
    },
    {
      name: 'Item 3 - Group 3'
    },
    {
      name: 'Item 4 - Group 3'
    }]
  }];
  constructor() { }

  ngOnInit(): void {
   
  }

  dropItem(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getConnectedList(): any[] {
    return this.groups.map(x => `${x.id}`);
  }

  dropGroup(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
  }


}
