import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GridComponent} from '../components/grid/grid';
import {GridHeaderComponent} from '../components/grid-header/grid-header';
import {GridRowComponent} from '../components/grid-row/grid-row';
import {GridTdComponent} from '../components/grid-td/grid-td';
import {GridThComponent} from '../components/grid-th/grid-th';
import {GridBodyComponent} from '../components/grid- body/grid-body';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridHeaderComponent,
    GridBodyComponent,
    GridRowComponent,
    GridThComponent,
    GridTdComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
