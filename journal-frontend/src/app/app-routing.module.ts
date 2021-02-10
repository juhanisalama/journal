// Sovelluksen reititykset

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryDetailsComponent } from './pages/entry-details/entry-details.component';
import { JournalListComponent} from './pages/journal-list/journal-list.component';
import { MainLayoutComponent} from './pages/main-layout/main-layout.component';


// JournalListComponentista tehdään MainLayoutComponentin "lapsireitti"
const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', component: JournalListComponent},
    { path: ':id', component: EntryDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
