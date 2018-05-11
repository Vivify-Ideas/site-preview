import { TestBed, inject } from '@angular/core/testing';

import { AngularSitePreviewLibService } from './angular-site-preview-lib.service';

describe('AngularSitePreviewLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularSitePreviewLibService]
    });
  });

  it('should be created', inject([AngularSitePreviewLibService], (service: AngularSitePreviewLibService) => {
    expect(service).toBeTruthy();
  }));
});
