import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridComponent} from './grid/grid';
import {GridHeaderComponent} from './grid-header/grid-header';
import {GridBodyComponent} from './grid- body/grid-body';
import {GridRowComponent} from './grid-row/grid-row';
import {GridThComponent} from './grid-th/grid-th';
import {GridTdComponent} from './grid-td/grid-td';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent,
    GridHeaderComponent,
    GridBodyComponent,
    GridRowComponent,
    GridThComponent,
    GridTdComponent
  ],
  exports: [
    GridComponent,
    GridHeaderComponent,
    GridBodyComponent,
    GridRowComponent,
    GridThComponent,
    GridTdComponent
  ]
})

export class FlexGridModule {
}
