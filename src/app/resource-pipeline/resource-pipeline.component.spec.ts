import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePipelineComponent } from './resource-pipeline.component';

describe('ResourcePipelineComponent', () => {
  let component: ResourcePipelineComponent;
  let fixture: ComponentFixture<ResourcePipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcePipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcePipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
