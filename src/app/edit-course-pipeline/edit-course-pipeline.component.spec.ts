import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoursePipelineComponent } from './edit-course-pipeline.component';

describe('EditCoursePipelineComponent', () => {
  let component: EditCoursePipelineComponent;
  let fixture: ComponentFixture<EditCoursePipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCoursePipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoursePipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
