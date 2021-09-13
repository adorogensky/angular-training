import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from '../employee.service';
import { AgGridModule } from 'ag-grid-angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('EmployeeListComponent', () => {
  let spectator: Spectator<EmployeeListComponent>;
  let component: EmployeeListComponent;
  let componentDom;
  const employeeService = new EmployeeService();
  let getEmployeesSpy;
  const stubbedEmployees = [{
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
  }];

  const createComponent = createComponentFactory({
    component: EmployeeListComponent,
    imports: [ AgGridModule ]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.fixture.componentInstance;
    componentDom = spectator.fixture.nativeElement;
    spectator.detectChanges();
    getEmployeesSpy = spyOn(employeeService, 'getEmployees').and.returnValue(stubbedEmployees);
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
    const columnDefs = component.agGrid.columnDefs;

    expect(columnDefs[0]).toHaveAttribute('headerName', 'Name');
    expect(columnDefs[1]).toHaveAttribute('headerName', 'Dept');
    expect(columnDefs[2]).toHaveAttribute('headerName', 'Hired');
    expect(columnDefs[3]).toHaveAttribute('headerName', 'Terminated');

    expect(columnHeaders[0]).toContainText('Name');
    expect(columnHeaders[1]).toContainText('Dept');
    expect(columnHeaders[2]).toContainText('Hired');
    expect(columnHeaders[3]).toContainText('Terminated');

    // this will work too
    expect(componentDom.querySelectorAll('.ag-header-cell-text')[0]).toContainText('Name');
  });

  it('have however many rows returned by the service', () => {
    const cellValues = spectator.queryAll('.ag-cell-value', { root: true });;
    expect(cellValues).toContainText(stubbedEmployees[0].name);
    expect(cellValues).toContainText(stubbedEmployees[0].dept);
    expect(cellValues).toContainText(stubbedEmployees[1].name);
    expect(cellValues).toContainText(stubbedEmployees[1].dept);
  });
});
