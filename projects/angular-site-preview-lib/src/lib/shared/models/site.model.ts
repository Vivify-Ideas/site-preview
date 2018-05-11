export class SiteModel {

  public requestedUrl: string;
  public url: string;
  public title: string;
  public description: string;
  public image: string;

  constructor(requestedUrl: string, url: string, title: string, description: string, image: string) {
    this.requestedUrl = requestedUrl;
    this.url = url;
    this.title = title;
    this.description = description;
    this.image = image;
  }
}
