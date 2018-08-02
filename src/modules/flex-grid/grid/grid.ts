import {AfterContentInit, Component, ContentChild, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GridHeaderComponent} from '../grid-header/grid-header';
import {GridThComponent} from '../grid-th/grid-th';
import {GridBodyComponent} from '../grid- body/grid-body';
import {GridRowComponent} from '../grid-row/grid-row';
import {GridOrder} from '../helper';

@Component({
  selector: 'grid-component',
  templateUrl: './grid.html',
  styleUrls: ['./grid.css'],
})
export class GridComponent implements OnInit, AfterContentInit {
  title = 'grid';

  @Input() classes = '';

  @Output() sortHandler: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectHandler: EventEmitter<any> = new EventEmitter<any>();
  @Output() scrollHandler: EventEmitter<any> = new EventEmitter<any>();

  @ContentChild(GridHeaderComponent) header: GridHeaderComponent;
  @ContentChild(GridBodyComponent) body: GridBodyComponent;

  sortable = false;
  selectable = false;
  scrollable = false;

  ngOnInit() {
    this.sortable = this.sortHandler.observers.length > 0;
    this.selectable = this.selectHandler.observers.length > 0;
    this.scrollable = this.scrollHandler.observers.length > 0;
  }

  ngAfterContentInit(): void {
    if (this.sortable) {
      this.header.row.th.forEach((thead: GridThComponent) => {
        thead.disabledSort = false;
        thead.clickHandler = this.onSort.bind(this, thead, 'th');
      });
    }

    if (this.selectable) {
      this.body.row.forEach((trow: GridRowComponent) => {
        trow.disableSelect = false;
        trow.clickHandler = (e) => {
          this.body.row.forEach((row: GridRowComponent) => row.deactive());
          trow.active = true;
          this.onSelect.call(this, trow, 'tr', e);
        };
      });
    }

    if (this.scrollable) {
      this.body.disableScroll = false;
      this.body.scrollHandler = this.onScroll.bind(this);
    }
  }

  onSort(el: GridThComponent, type: string, $event: any): void {
    this.sortHandler.emit({field: el.name, order: GridOrder[el.sort].toString()});
  }


  onSelect($event: any): void {
    console.log('select event from grid-component');
    this.selectHandler.emit($event);
  }

  onScroll($event: any): void {
    console.log('scroll event from grid-component');
    this.scrollHandler.emit($event);
  }
}
