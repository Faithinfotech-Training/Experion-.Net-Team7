import { TestBed } from '@angular/core/testing';

import { PageVisitService } from './page-visit.service';

describe('PageVisitService', () => {
  let service: PageVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
