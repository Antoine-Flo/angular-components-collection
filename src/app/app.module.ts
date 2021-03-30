import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragNDropComponent } from './drag-ndrop/drag-ndrop.component';
import { ElementComponent } from './element/element.component';
import { RangeColorComponent } from './range-color/range-color.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    DragNDropComponent,
    ElementComponent,
    RangeColorComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
