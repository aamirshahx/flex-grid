import {Component, ContentChild} from '@angular/core';
import {GridRowComponent} from '../grid-row/grid-row';

@Component({
  selector: 'grid-header',
  templateUrl: './grid-header.html',
  styleUrls: ['./grid-header.css']
})

export class GridHeaderComponent {
  title = 'grid-header';

  @ContentChild(GridRowComponent) row: GridRowComponent;

}
