import { TestBed } from '@angular/core/testing';

import { CoursePipelineService } from './course-pipeline.service';

describe('CoursePipelineService', () => {
  let service: CoursePipelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursePipelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
