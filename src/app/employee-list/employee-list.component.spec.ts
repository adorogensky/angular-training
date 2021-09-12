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
    imports: [ AgGridModule ]
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

    // this will work
    // { root: true } is necessary to enable native search starting from the document
    // otherwise the search will be conducted on the debugElement and it won't go introspect the ag-grid-angular element
    const columnHeaders = spectator.queryAll('.ag-header-cell-text', { root: true });

    expect(columnHeaders[0]).toContainText('Name');
    expect(columnHeaders[1]).toContainText('Dept');
    expect(columnHeaders[2]).toContainText('Hired');
    expect(columnHeaders[3]).toContainText('Terminated');

    // this will work too
    expect(componentDom.querySelectorAll('.ag-header-cell-text')[0]).toContainText('Name');
  });
});
