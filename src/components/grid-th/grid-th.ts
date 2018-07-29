import {Component, Input} from '@angular/core';
import {GridOrder} from '../../app/app.component';

@Component({
  selector: 'grid-th',
  templateUrl: './grid-th.html',
  styleUrls: ['./grid-th.css']
})

export class GridThComponent {
  title = 'grid-head-data';
  @Input() icon = '';
  @Input() name = '';
  @Input() sort = GridOrder.ASC;

  order: any = GridOrder;
  disabledSort = true;

  clickHandler(e): void {
  }

  private onClick(e): void {
    if (!this.disabledSort) {
      this.sort = this.invertOrder(this.sort);
    }
    this.clickHandler(e);
  }

  invertOrder(order: GridOrder) {
    return order === GridOrder.ASC ? GridOrder.DESC : GridOrder.ASC;
  }
}
