import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './comps/test/test.component';
import { ResultsComponent } from './comps/results/results.component';
import { AccountDirective } from './d/account.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ResultsComponent,
    AccountDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
