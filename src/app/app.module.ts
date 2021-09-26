import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
