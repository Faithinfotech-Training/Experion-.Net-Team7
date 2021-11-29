import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourcesComponent } from './add-cources.component';

describe('AddCourcesComponent', () => {
  let component: AddCourcesComponent;
  let fixture: ComponentFixture<AddCourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
