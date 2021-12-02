import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagevisitComponent } from './pagevisit.component';

describe('PagevisitComponent', () => {
  let component: PagevisitComponent;
  let fixture: ComponentFixture<PagevisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagevisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagevisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
