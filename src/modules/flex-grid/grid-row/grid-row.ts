import {Component, ContentChildren, QueryList} from '@angular/core';
import {GridThComponent} from '../grid-th/grid-th';

@Component({
  selector: 'grid-row',
  templateUrl: './grid-row.html',
  styleUrls: ['./grid-row.css']
})

export class GridRowComponent {
  title = 'grid-row';
  disableSelect = true;
  active = false;

  @ContentChildren(GridThComponent) th: QueryList<GridThComponent>;

  // @ContentChildren(GridTdComponent) td: QueryList<GridTdComponent>;

  deactive(): void {
    this.active = false;
  }

  clickHandler(e): void {
  }

  private onClick(e): void {
    if (!this.disableSelect) {
      this.active = true;
      this.clickHandler(e);
    }
  }
}
