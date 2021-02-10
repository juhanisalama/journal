import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { parse } from 'path';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent implements AfterViewInit {

  @Input() title!: string;
  @Input() body!: string;

  @ViewChild('fade', {static: true})
  fade!: ElementRef<HTMLElement>;
  @ViewChild('bodyText', {static: true}) bodyText!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    // Tämä tarkistaa onko tekstisisällön overflow true.
    // jos ei ole, tekstin häivytysefekti piilotetaan.
    let style = window.getComputedStyle(this.bodyText!.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      // häivytysefekti (fade) päälle
      this.renderer.setStyle(this.fade!.nativeElement, 'display', 'block');
    } else {  // häivytysefekti (fade) pois (piilotettu)
      this.renderer.setStyle(this.fade!.nativeElement, 'display', 'none');
    }

  }

}
