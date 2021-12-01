import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResourcePipelineComponent } from './edit-resource-pipeline.component';

describe('EditResourcePipelineComponent', () => {
  let component: EditResourcePipelineComponent;
  let fixture: ComponentFixture<EditResourcePipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResourcePipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResourcePipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
