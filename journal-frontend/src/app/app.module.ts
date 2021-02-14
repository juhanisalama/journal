import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalListComponent } from './pages/journal-list/journal-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { EntryDetailsComponent } from './pages/entry-details/entry-details.component';


@NgModule({
  declarations: [
    AppComponent,
    JournalListComponent,
    MainLayoutComponent,
    JournalEntryComponent,
    EntryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
