import { TestBed } from '@angular/core/testing';

import { ResourcepipelineService } from './resourcepipeline.service';

describe('ResourcepipelineService', () => {
  let service: ResourcepipelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourcepipelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
