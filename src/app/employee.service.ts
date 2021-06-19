import { Injectable } from '@angular/core';

import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[] {
    return [{
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
    }, {
      id: 3,
      name: 'Max Lechiman',
      dept: 'Accounting',
      hired: new Date('5/7/2018'),
      terminated: new Date('2/15/2021')
    }];
  }
}
