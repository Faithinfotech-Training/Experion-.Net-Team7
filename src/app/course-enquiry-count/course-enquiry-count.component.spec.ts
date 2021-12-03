import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnquiryCountComponent } from './course-enquiry-count.component';

describe('CourseEnquiryCountComponent', () => {
  let component: CourseEnquiryCountComponent;
  let fixture: ComponentFixture<CourseEnquiryCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEnquiryCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEnquiryCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
