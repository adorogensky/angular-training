import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ag-grid-bootstrap';
  columns = [
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
  ];
  rows: Observable<any[]> | undefined;

  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.rows = this.httpClient.get<any[]>('https://www.ag-grid.com/example-assets/small-row-data.json');
  }
}
