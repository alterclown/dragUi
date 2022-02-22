import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragService } from './drag.service';

interface Item {
  id: number
  name: string
  tag: string,
  type: string
}

interface Items{
  Title:string
  Children:Array<Item>
}

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  

  items3: any[]= [
    {
      'Title': 'UK',
      'Children': [
		{ id: 1, name: "table", tag: "table", type: "report" },
		{ id: 2, name: "graph", tag: "graph", type: "report" },
		{ id: 3, name: "barchart", tag: "barchart", type: "graph" },
    {id: 0, name: '', tag: '', type:'' }
      ]
    },
    {
      'Title': 'US',
      'Children': [
    { id: 4, name: "content", tag: "content", type: "graph" },
      { id: 5, name: "card", tag: "card", type: "component" },
      { id: 6, name: "scatter", tag: "scatter", type: "graph" },
      {id: 0, name: '', tag: '', type:'' }
      ]
    }
  ];


  constructor(private dragService: DragService) { }

  ngOnInit(): void {

  }

  items2: Item[][] = [
    
    [
      { id: 1, name: "table", tag: "table", type: "report" },
      { id: 2, name: "graph", tag: "graph", type: "report" },
      { id: 3, name: "barchart", tag: "barchart", type: "graph" },
    ],
    [
      { id: 4, name: "content", tag: "content", type: "graph" },
      { id: 5, name: "card", tag: "card", type: "component" },
      { id: 6, name: "scatter", tag: "scatter", type: "graph" },
    ],

    [
      { id: 7, name: "aaa", tag: "aaa", type: "report" },
      { id: 8, name: "bbb", tag: "bbb", type: "component" },
      { id: 9, name: "ccc", tag: "ccc", type: "report" },
    ],
    [ 
      {id: 0, name: '', tag: '', type:'' }
    ]

  ]


  // items3: Items[][] = [
  //   [
  //   {Title:'A',
  //   Children:[
  //     { id: 1, title: "table", tag: "table", type: "report" },
  //     { id: 2, title: "graph", tag: "graph", type: "report" },
  //     { id: 3, title: "barchart", tag: "barchart", type: "graph" },
  //   ]},
    

  // ],
  // [{Title:'B',
  //   Children:[
  //     { id: 4, title: "content", tag: "content", type: "graph" },
  //     { id: 5, title: "card", tag: "card", type: "component" },
  //     { id: 6, title: "scatter", tag: "scatter", type: "graph" },
  //   ]}
  // ],
  // [{Title:'C',
  //   Children:[
  //     { id: 7, title: "aaa", tag: "aaa", type: "report" },
  //     { id: 8, title: "bbb", tag: "bbb", type: "component" },
  //     { id: 9, title: "ccc", tag: "ccc", type: "report" },
  //   ]}
  // ],

  // [{Title:'D',
  //   Children:[
  //   {id: 0, title: '', tag: '', type:'' }
  //   ]}
  // ]

  // ]


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


  onNewDrop(evt: any, currentItemRow: any, currentItemCol: any) {

    const draggableItemRow = evt.dataTransfer.getData('row')
    const draggableItemCol = evt.dataTransfer.getData('col')

    console.log("row ::::::ansi:    ", parseInt(draggableItemRow));
    console.log("col :::::ansi::    ", parseInt(draggableItemCol));

    console.log("row ::::::falamu:    ", typeof currentItemRow);
    console.log("col :::::falamu::    ", currentItemCol);
    const currentArrData: any = this.items3[currentItemRow].Children[currentItemCol]

    var a=this.items3[currentItemRow];
    var b=this.items3[currentItemCol];

    this.items3[currentItemRow].Children[currentItemCol] = this.items3[draggableItemRow].Children[draggableItemCol]

     this.items3[draggableItemRow].Children[draggableItemCol] = currentArrData;

    console.log(this.items3);


  }

  saveItemToArray() {
    const currentArrData: Item = {
      id: 4444,
      tag: "graph",
      name: "added item",
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


onDragInnerStart(evt: any,currentTitleIndex:any, currentItemRow: any, currentItemCol: any) {

  evt.dataTransfer.setData('row', currentItemRow);
  evt.dataTransfer.setData('col', currentItemCol);
  evt.dataTransfer.setData('currentTitleIndex', currentTitleIndex)

}

onDragInnerOver(evt: any,currentTitleIndex:any, currentItemRow: any, currentItemCol: any) {
  evt.preventDefault();
}

onInnerDrop(evt: any,currentTitleIndex:any, currentItemRow: any, currentItemCol: any) {

  const draggableItemRow = evt.dataTransfer.getData('row')
  const draggableItemCol = evt.dataTransfer.getData('col')
  const draggableItemTitle = evt.dataTransfer.getData('currentTitleIndex')

  console.log("row ::::::ansi:    ", parseInt(draggableItemRow));
  console.log("col :::::ansi::    ", parseInt(draggableItemCol));
  console.log("col :::::ansi::    ", parseInt(draggableItemTitle));

  console.log("row ::::::falamu:    ", typeof currentItemRow);
  console.log("col :::::falamu::    ", currentItemCol);


  const currentArrData:any = this.items3[currentItemRow][currentItemCol].Children[currentTitleIndex]
  this.items3[currentItemRow][currentItemCol].Children[currentTitleIndex] = this.items3[draggableItemRow][draggableItemCol].Children[currentTitleIndex]
  this.items3[draggableItemRow][draggableItemCol].Children[draggableItemTitle] = currentArrData;
  console.log(this.items3);

}

}
