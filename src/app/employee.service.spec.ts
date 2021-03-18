import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('EmployeeService is created', () => {
    expect(service).toBeTruthy();
  });
  
  it('EmployeeService.getEmployees() returns list of 3 employees', () => {
    expect(service.getEmployees()).toHaveSize(3);
  });
});
