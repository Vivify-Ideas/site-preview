import { Injectable } from '@angular/core';
import { EmbedlyService } from './shared/services/embedly.service';
import { SiteModel } from './shared/models/site.model';

@Injectable()
export class AngularSitePreviewLibService {

  public sites: SiteModel[] = [];
  private fetchedUrls: string[] = [];

  constructor(private embedlyService: EmbedlyService) { }

  updateSitesFromText(text: string) {
    // Clear preview if no text.
    if (!text) {
      this.clearSitesPreview();

      return [];
    }

    // Get array of the URLs from the text.
    const urls: RegExpMatchArray | null = text.match(/((https?|ftps?)\:\/\/)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g);

    // Clear preview if no URLs in the text.
    if (!urls) {
      this.clearSitesPreview();

      return [];
    }

    // Remove a previously added sites from the preview if they removed from the text.
    this.refreshSitePreview(urls);

    // Fetch a site data per each URL. The Embedly API doesn't have option to send more then one URL per request!
    urls.forEach((url) => {
      // Skip fetching if it's already fetched. Reduce a number of the API calls.
      if (this.isFetched(url)) {
        return true;
      }

      this.getSiteDataByUrl(url)
        .subscribe(
          resp => {
            const site = this.embedlyService.getSiteModelByData(url, resp);
            this.addSite(site);
          },
          error => console.error(error) // TODO: Implement error handling.
        );
    });
  }

  private refreshSitePreview(urls: string[]) {
    const diff = this.fetchedUrls.filter(fetchedUrl => urls.indexOf(fetchedUrl) < 0);
    if (diff) {
      this.sites = this.sites.filter((site) => !diff.includes(site.url));
    }
  }

  private clearSitesPreview() {
    this.sites = [];
  }

  private isFetched(url) {
    return !!this.sites.find(site => site.requestedUrl === url);
  }

  getSiteDataByUrl(url: string) {
    return this.embedlyService.getSiteData(url);
  }

  private addSite(site: SiteModel) {
    this.fetchedUrls.push(site.requestedUrl);
    this.sites.push(site);
  }
}
