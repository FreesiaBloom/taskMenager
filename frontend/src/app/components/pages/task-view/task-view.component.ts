import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/core/interfaces/ITile';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent {

  constructor() { }

  tiles: Tile[] = [
    {cols: 1, rows: 1, color: 'lightblue'},
    {cols: 3, rows: 1, color: 'lightgreen'}
  ];

}
