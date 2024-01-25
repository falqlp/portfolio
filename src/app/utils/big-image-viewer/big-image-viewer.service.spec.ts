import { TestBed } from '@angular/core/testing';

import { BigImageViewerService } from './big-image-viewer.service';

describe('BigImageViewerService', () => {
  let service: BigImageViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigImageViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
