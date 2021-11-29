import { TestBed } from '@angular/core/testing';

import { ResourceenquiryService } from './resourceenquiry.service';

describe('ResourceenquiryService', () => {
  let service: ResourceenquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceenquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
