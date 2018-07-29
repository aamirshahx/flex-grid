import {Component, ContentChildren, QueryList} from '@angular/core';
import {GridRowComponent} from '../grid-row/grid-row';

@Component({
  selector: 'grid-body',
  templateUrl: './grid-body.html',
  styleUrls: ['./grid-body.css']
})

export class GridBodyComponent {
  title = 'grid-body';
  @ContentChildren(GridRowComponent) row: QueryList<GridRowComponent>;
}
