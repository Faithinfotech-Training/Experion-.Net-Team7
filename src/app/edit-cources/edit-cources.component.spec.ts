import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourcesComponent } from './edit-cources.component';

describe('EditCourcesComponent', () => {
  let component: EditCourcesComponent;
  let fixture: ComponentFixture<EditCourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
