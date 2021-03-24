import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Dept', field: 'dept' },
    { headerName: 'Hired', field: 'hired' },
    { headerName: 'Terminated', field: 'terminated' }
  ]

  rowData: any

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.rowData = this.employeeService.getEmployees().map(el => {
      return {
        'name': el.name,
        'dept': el.dept,
        'hired': new DatePipe("en-US").transform(el.hired, 'M/d/yyyy'),
        'terminated': new DatePipe("en-US").transform(el.terminated, 'M/d/yyyy')
      }
    });
  }
}
