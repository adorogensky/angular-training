import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-grid-bootstrap';
  columns = [
    { field: 'name' },
    { field: 'dept' }
  ];
  rows = [{
    name: 'Alex',
    dept: 'Engineering',
  }, {
    name: 'Nicole',
    dept: 'Marketing'
  }, {
    name: 'Max',
    dept: 'Accounting'
  }];
}
