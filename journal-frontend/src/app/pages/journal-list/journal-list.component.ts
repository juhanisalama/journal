import { Component, OnInit } from '@angular/core';
import { EntriesService } from 'src/app/shared/entries.service';
import { Entry } from 'src/app/shared/node.model'

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.scss']
})
export class JournalListComponent implements OnInit {

  entries: Entry[] = new Array<Entry>();

  constructor(private EntriesService: EntriesService) { }

  ngOnInit() {
    // Hae kaikki merkinnät EntriesServicestä
    this.entries = this.EntriesService.getAll();


  }

}
