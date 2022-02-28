import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragComponent } from './drag/drag.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { DragGroupComponent } from './drag-group/drag-group.component';
import { FreeDragComponent } from './free-drag-component/free-drag.component';
import { DragEventComponent } from './drag-event/drag-event.component';
import { GridsterModule } from 'angular-gridster2';
import { DragGridComponent } from './grid/drag-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    DragGroupComponent,
    FreeDragComponent,
    DragEventComponent,
    DragGridComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    GridsterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
