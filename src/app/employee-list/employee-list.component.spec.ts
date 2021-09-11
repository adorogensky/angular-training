import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from '../employee.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('EmployeeListComponent', () => {
  let spectator: Spectator<EmployeeListComponent>;
  let component: EmployeeListComponent;
  let componentDom;
  const employeeService = new EmployeeService();
  let getEmployeesSpy;

  const createComponent = createComponentFactory({
    component: EmployeeListComponent,
    imports: [ AgGridModule ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.fixture.componentInstance;
    componentDom = spectator.fixture.nativeElement;
    spectator.detectChanges();
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
    expect(spectator.query('ag-grid-angular')).toBeTruthy();
  });

  it('have defined table columns', () => {
    // .ag-header

    // wtf this works
    expect(componentDom.querySelectorAll('.ag-header-cell-text')[0]).toContainText('Name');
    // and this doesn't ???
    expect(spectator.queryAll('.ag-header-cell-text')[0]).toContainText('Name');
  });
});
