import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FlexGridModule} from '../modules/flex-grid/flex-grid.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [BrowserModule, FlexGridModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
