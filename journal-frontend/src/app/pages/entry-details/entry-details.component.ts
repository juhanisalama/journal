import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntriesService } from 'src/app/shared/entries.service';
import { Entry } from 'src/app/shared/node.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.scss']
})
export class EntryDetailsComponent implements OnInit {

  entry!: Entry;
  entryId!: number;
  new!: boolean;

  constructor(private entriesService: EntriesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Tällä selvitetään luodaanko uutta merkintää vai muokataanko olemassaolevaa
    this.route.params.subscribe((params: Params) => {
       // Luodaan uusi merkintä
    this.entry = new Entry();
      if (params.id) {
        this.entry = this.entriesService.get(params.id);
        this.entryId = params.id;
        this.new = false
      } else {
        this.new = true
      }
    })

   

  }

  onSubmit(form: NgForm) {

    if (this.new) { // Merkintä tallennetaan
      this.entriesService.add(form.value);
    } else { // Merkintää muokataan
      this.entriesService.update(this.entryId, form.value.title, form.value.date, form.value.body);
    }   this.router.navigateByUrl('/');

   
  }
// Cancel-napin logiikka joka painettuna palauttaa takaisin sovelluksen "etusivulle"
  cancel() {
this.router.navigateByUrl('/');
      }
}
