import {Component, ContentChildren, QueryList} from '@angular/core';
import {GridRowComponent} from '../grid-row/grid-row';

@Component({
  selector: 'grid-body',
  templateUrl: './grid-body.html',
  styleUrls: ['./grid-body.css']
})

export class GridBodyComponent {
  title = 'grid-body';
  disableScroll = true;
  @ContentChildren(GridRowComponent) row: QueryList<GridRowComponent>;

  scrollHandler(e): void {
  }

  onScroll(e): void {
    if (!this.disableScroll) {
      this.scrollHandler(e);
    }
  }
}
