import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceEnquiryReportComponent } from './resource-enquiry-report.component';

describe('ResourceEnquiryReportComponent', () => {
  let component: ResourceEnquiryReportComponent;
  let fixture: ComponentFixture<ResourceEnquiryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceEnquiryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceEnquiryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
