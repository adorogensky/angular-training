import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { DatePipe } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  columnDefs = [
    { headerName: 'Name', field: 'name', checkboxSelection: true },
    { headerName: 'Dept', field: 'dept' },
    { headerName: 'Hired', field: 'hired' },
    { headerName: 'Terminated', field: 'terminated' }
  ];

  rowData: any;

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.rowData = this.employeeService.getEmployees().map(el => {
      return {
        name: el.name,
        dept: el.dept,
        hired: new DatePipe('en-US').transform(el.hired, 'M/d/yyyy'),
        terminated: new DatePipe('en-US').transform(el.terminated, 'M/d/yyyy')
      };
    });
  }

  getSelectedRows(): void {
    const selectedRowIds = this.agGrid.api.getSelectedNodes().map(node => node.data.name);
    alert(selectedRowIds);
  }
}
