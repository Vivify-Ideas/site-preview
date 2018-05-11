import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SiteModel } from '../../shared/models/site.model';

@Injectable()
export class EmbedlyService {

  private apiUrl = 'https://api.embedly.com/1/oembed';
  private key = '3ec3051494eb49eb9546f725dde38af9'; // TODO: Move in config so we can use different values per env.

  constructor(private http: HttpClient) { }

  getSiteData(url: string) {
    return this.http.get(this.apiUrl, { params: {url: url, key: this.key}});
    // TODO: Handle errors
      // .pipe(
      //   catchError((this.handleError('getSiteData', [])))
      // )
  }

  // /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  //
  //     // Let the app keep running by returning an empty result.
  //     return result;
  //   };
  // }

  /**
   * Create site model from API data.
   * @param requestedUrl
   * @param data
   * @returns {SiteModel}
   */
  getSiteModelByData(requestedUrl, data): SiteModel {
    return new SiteModel(requestedUrl, data.url, data.title, data.description, data.thumbnail_url);
  }
}
