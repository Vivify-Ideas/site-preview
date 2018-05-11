import { Component } from '@angular/core';
import { AngularSitePreviewLibService } from './angular-site-preview-lib.service';
import { EmbedlyService } from './shared/services/embedly.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'lib-site-preview',
  templateUrl: './angular-site-preview-lib.component.html',
  styleUrls: ['./angular-site-preview-lib.component.css'],
  providers: [AngularSitePreviewLibService, EmbedlyService]
})
export class AngularSitePreviewLibComponent {

  public inputText: string;
  public inputChanged: Subject<string> = new Subject<string>();

  constructor(public sitePreviewService: AngularSitePreviewLibService) {
    // Don't request text processing too often.
    this.inputChanged
      .debounceTime(500) // Wait 500ms after the last event before emitting last event.
      .distinctUntilChanged() // Only emit if value is different from previous value.
      .subscribe(model => this.processInputText(model));
  }

  onChange(text: string) {
    this.inputChanged.next(text);
  }

  /**
   * Get sites from text and update variable used in the template.
   * @param {string} text
   */
  private processInputText(text: string) {
    this.sitePreviewService.updateSitesFromText(text);
  }

}
