import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragEventComponent } from './drag-event/drag-event.component';
import { DragGroupComponent } from './drag-group/drag-group.component';
import { DragComponent } from './drag/drag.component';
import { FreeDragComponent } from './free-drag-component/free-drag.component';
import { DragGridComponent } from './grid/drag-grid.component';

const routes: Routes = [
  { path: 'drag', component: DragComponent},
  { path: 'dragEvent', component: DragEventComponent},
  { path: 'dragGroup', component: DragGroupComponent},
  { path: 'freeDrag', component: FreeDragComponent},
  { path: 'drag-grid', component: DragGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
