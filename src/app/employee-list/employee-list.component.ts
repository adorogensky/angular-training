import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { DatePipe } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

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
    private employeeService: EmployeeService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.rowData = this.employeeService.getEmployees().map(el => {
      return {
        id: el.id,
        name: el.name,
        dept: el.dept,
        hired: new DatePipe('en-US').transform(el.hired, 'M/d/yyyy'),
        terminated: new DatePipe('en-US').transform(el.terminated, 'M/d/yyyy')
      };
    });
  }

  deleteSelectedRows() {
    const selectedRowIds = this.agGrid.api.getSelectedNodes().map(node => node.data.id);
    this.rowData = this.rowData.filter(
      obj => !selectedRowIds.includes(obj.id)
    );
  }

  showAddEmployeeDialog() {
    this.dialog.open(AddEmployeeComponent);
  }
}
