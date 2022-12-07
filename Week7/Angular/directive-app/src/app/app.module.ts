import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CustomstyleDirective } from './customstyle.directive';
import { ExpenseEntryListComponent } from './components/expense-entry-list/expense-entry-list.component';
import { NgfordemoComponent } from './components/ngfordemo/ngfordemo.component';
import { CardHoverDirective } from './directives/card-hover.directive';
import { JokeComponent } from './components/joke/joke.component';
import { JokeListComponent } from './components/joke-list/joke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CustomstyleDirective,
    ExpenseEntryListComponent,
    NgfordemoComponent,
    CardHoverDirective,
    JokeComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
