import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from '../employee.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  const employeeService = new EmployeeService();
  let getEmployeesSpy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ AgGridModule ],
      declarations: [ EmployeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    getEmployeesSpy = spyOn(employeeService, 'getEmployees').and.returnValue([{
        id: 1,
        name: 'Alex Dorogensky',
        dept: 'System Engineering',
        hired: new Date('3/18/2021'),
        terminated: null
      }, {
        id: 2,
        name: 'Nicole Mayo',
        dept: 'Marketing',
        hired: new Date('1/1/2015'),
        terminated: null
    }]);
  });

  it('is created', () => {
    expect(component).toBeTruthy();
  });

  it('has an ag-grid-angular table', () => {
    const dom = fixture.nativeElement;
    expect(dom.querySelector('ag-grid-angular')).toBeTruthy();
  });

  it('has a "Name" table column', () => {
    const dom = fixture.nativeElement;
    expect(dom.querySelector('.ag-header').textContent).toContain('Name');
    // TODO: more precise selector is not working, e.g. 'span[class = ag-header-cell-text][textContent = Name]'
  });
});
