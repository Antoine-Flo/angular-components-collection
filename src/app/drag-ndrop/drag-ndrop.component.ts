import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drag-ndrop',
  templateUrl: './drag-ndrop.component.html',
  styleUrls: ['./drag-ndrop.component.scss'],
})
export class DragNDropComponent implements OnInit {

  list = [
    {
      num: 1,
      color: `hsl(0, 47%, 58%)`
    },
    {
      num: 2,
      color: `hsl(200, 47%, 58%)`,
    },
    {
      num: 3,
      color: `hsl(130, 47%, 58%)`,
    },
    {
      num: 4,
      color: `hsl(50, 47%, 58%)`,
    },
    {
      num: 5,
      color: `hsl(300, 47%, 58%)`,
    },
    {
      num: 6,
      color: `hsl(90, 47%, 58%)`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  dropped(e: CdkDragDrop<string[]>) {
    console.log(e.previousIndex);
    moveItemInArray(this.list, e.previousIndex, e.currentIndex);
  }

}
