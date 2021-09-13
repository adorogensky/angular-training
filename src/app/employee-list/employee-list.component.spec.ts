import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from '../employee.service';
import { AgGridModule } from 'ag-grid-angular';
import { byText, createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';

describe('EmployeeListComponent', () => {
  let spectator: Spectator<EmployeeListComponent>;
  let component: EmployeeListComponent;
  let componentDom;
  const employeeService = new EmployeeService();
  let getEmployeesSpy;
  const employee1Hired = '3/18/2021';
  const employee2Hired = '1/1/2015';

  const stubbedEmployees = [{
    id: 1,
    name: 'Alex Dorogensky',
    dept: 'System Engineering',
    hired: new Date(employee1Hired),
    terminated: null
  }, {
    id: 2,
    name: 'Nicole Mayo',
    dept: 'Marketing',
    hired: new Date(employee2Hired),
    terminated: null
  }];

  const createComponent = createComponentFactory({
    component: EmployeeListComponent,
    imports: [ AgGridModule ],
    providers: [ mockProvider(EmployeeService, employeeService) ]
  });

  beforeEach(() => {
    getEmployeesSpy = spyOn(employeeService, 'getEmployees').and.returnValue(stubbedEmployees);
    spectator = createComponent();
    component = spectator.fixture.componentInstance;
    componentDom = spectator.fixture.nativeElement;
    spectator.detectChanges();
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

  it('should show "Get Selected Rows" button', () => {
    expect(spectator.query(byText('Get Selected Rows'))).toBeInstanceOf(HTMLButtonElement);
  });

  it('have however many rows returned by the service', () => {
    const cellValues = spectator.queryAll('.ag-cell-value', { root: true });;
    expect(cellValues).toContainText(stubbedEmployees[0].name);
    expect(cellValues).toContainText(stubbedEmployees[0].dept);
    expect(cellValues).toContainText(stubbedEmployees[1].name);
    expect(cellValues).toContainText(stubbedEmployees[1].dept);

    const rows = component.agGrid.rowData;
    expect(rows).toHaveLength(2);
    expect(rows[0]).toHaveAttribute('name', stubbedEmployees[0].name);
    expect(rows[0]).toHaveAttribute('dept', stubbedEmployees[0].dept);
    expect(rows[0]).toHaveAttribute('hired', employee1Hired);
    expect(rows[0]).toHaveAttribute('terminated', null);

    expect(rows[1]).toHaveAttribute('name', stubbedEmployees[1].name);
    expect(rows[1]).toHaveAttribute('dept', stubbedEmployees[1].dept);
    expect(rows[1]).toHaveAttribute('hired', employee2Hired);
    expect(rows[1]).toHaveAttribute('terminated', null);
  });
});
