import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemasterComponent } from './employeemaster.component';

describe('EmployeemasterComponent', () => {
  let component: EmployeemasterComponent;
  let fixture: ComponentFixture<EmployeemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeemasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
