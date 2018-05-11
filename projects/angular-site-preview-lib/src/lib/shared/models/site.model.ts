export class SiteModel {

  public url: string;
  public title: string;
  public description: string;
  public image: string;

  constructor(url: string, title: string, description: string, image: string) {
    this.url = url;
    this.title = title;
    this.description = description;
    this.image = image;
  }
}
