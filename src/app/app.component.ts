import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drag-app';

  items2 = [
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
    
  ]

  items = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ];
}
