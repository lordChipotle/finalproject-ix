import { TestBed } from '@angular/core/testing';

import { LinkRtoFService } from './link-rto-f.service';

describe('LinkRtoFService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkRtoFService = TestBed.get(LinkRtoFService);
    expect(service).toBeTruthy();
  });
});
