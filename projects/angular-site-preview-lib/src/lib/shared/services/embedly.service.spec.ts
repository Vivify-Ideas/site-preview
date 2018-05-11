import { TestBed, inject } from '@angular/core/testing';

import { EmbedlyService } from './embedly.service';

describe('EmbedlyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmbedlyService]
    });
  });

  it('should be created', inject([EmbedlyService], (service: EmbedlyService) => {
    expect(service).toBeTruthy();
  }));
});
