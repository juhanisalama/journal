import { Injectable } from '@angular/core';
import { Entry } from './node.model';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

// Taulukko, johon merkinnät (entry) varastoidaan 

 entries: Entry[] = new Array<Entry>();


  constructor() { }

// Metodit joilla merkintöjä (entry) käsitellään

// Hae kaikki merkinnät
getAll() {
  return this.entries;
}

// Get-metodi
  get(id: number) {
    return this.entries[id];
  }
// Get ID-metodi
  getId(entry: Entry) {
    return this.entries.indexOf(entry);
  }

  add(entry: Entry) {
    // Tämä metodi lisää merkinnän (entry) taulukkoon ja palauttaa
    // merkinnän id:n. id on myös taulukon indeksi, jossa merkintä sijaitsee.
    let newLength = this.entries.push(entry);
    let index = newLength - 1;
    return index;

  }

  // Update -metodi
  update(id: number, title: string, date: string, body: string,) {
    let entry = this.entries[id];
    entry.title = title;
    entry.date = date;
    entry.body = body;
    
  }
// Delete -metodi poistaa elementin taulukosta
  delete(id: number) {
    this.entries.splice(id, 1);
  }
 
}
