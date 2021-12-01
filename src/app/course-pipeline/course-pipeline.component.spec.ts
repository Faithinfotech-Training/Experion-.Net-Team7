import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePipelineComponent } from './course-pipeline.component';

describe('CoursePipelineComponent', () => {
  let component: CoursePipelineComponent;
  let fixture: ComponentFixture<CoursePipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
