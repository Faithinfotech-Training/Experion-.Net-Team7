import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceEnquiryCountComponent } from './resource-enquiry-count.component';

describe('ResourceEnquiryCountComponent', () => {
  let component: ResourceEnquiryCountComponent;
  let fixture: ComponentFixture<ResourceEnquiryCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceEnquiryCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceEnquiryCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
