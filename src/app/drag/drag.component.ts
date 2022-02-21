import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragService } from './drag.service';

interface Item {
  id: number
  title: string
  tag: string,
  type: string
}

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  lol = ['lol1', 'lol2'];

  constructor(private dragService: DragService) { }

  ngOnInit(): void {

  }

  items2: Item[][] = [
    [
      { id: 1, title: "table", tag: "table", type: "report" },
      { id: 2, title: "graph", tag: "graph", type: "report" },
      { id: 3, title: "barchart", tag: "barchart", type: "graph" },
    ],
    [
      { id: 4, title: "content", tag: "content", type: "graph" },
      { id: 5, title: "card", tag: "card", type: "component" },
      { id: 6, title: "scatter", tag: "scatter", type: "graph" },
    ],

    [
      { id: 4, title: "aaa", tag: "aaa", type: "report" },
      { id: 5, title: "bbb", tag: "bbb", type: "component" },
      { id: 6, title: "ccc", tag: "ccc", type: "report" },
    ],

  ]


  items3 = [
    [
      { id: 1, title: "table", tag: "table" },
      { id: 2, title: "graph", tag: "graph" },
      { id: 3, title: "barchart", tag: "barchart" },
    ],
    [
      { id: 4, title: "content", tag: "content" },
      { id: 5, title: "card", tag: "card" },
      { id: 6, title: "scatter", tag: "scatter" },
    ],

    [
      { id: 4, title: "aaa", tag: "aaa" },
      { id: 5, title: "bbb", tag: "bbb" },
      { id: 6, title: "ccc", tag: "ccc" },
    ],

  ]


  items = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ];

  onDragStart(evt: any, row: any, col: any) {

    evt.dataTransfer.setData('row', row);
    evt.dataTransfer.setData('col', col)

  }


  onDragOver(evt: any, row: any, col: any) {
    evt.preventDefault();
  }

  onDrop(evt: any, currentItemRow: any, currentItemCol: any) {
    // console.log(evt)



    const draggableItemRow = evt.dataTransfer.getData('row')
    const draggableItemCol = evt.dataTransfer.getData('col')

    console.log("row ::::::ansi:    ", parseInt(draggableItemRow));
    console.log("col :::::ansi::    ", parseInt(draggableItemCol));

    console.log("row ::::::falamu:    ", typeof currentItemRow);
    console.log("col :::::falamu::    ", currentItemCol);


    const currentArrData: Item = this.items2[currentItemRow][currentItemCol]

    this.items2[currentItemRow][currentItemCol] = this.items2[draggableItemRow][draggableItemCol]

    this.items2[draggableItemRow][draggableItemCol] = currentArrData;
    console.log(this.items2);


  }

  saveItemToArray() {
    const currentArrData: Item = {
      id: 4444,
      tag: "graph",
      title: "added item",
      type: "report"
    }

    const itemlengthArray = this.size(this.items2)


    this.items2[itemlengthArray[0] +1 ][itemlengthArray[1] +1] = currentArrData; 

    // this.items2[itemlengthArray[0] +1 ][itemlengthArray[1] +1] = 
    // this.items2[itemlengthArray[0] +1].push([currentArrData])

  }

   size(ar : Item [][]){
    var row_count = ar.length;
    var row_sizes = []
    for(var i=0;i<row_count;i++){
        row_sizes.push(ar[i].length)
    }


    return [row_count, Math.min.apply(null, row_sizes)]
}


}
