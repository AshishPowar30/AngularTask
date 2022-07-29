import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTable, MatTableModule } from '@angular/material/table';


import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeemasterComponent } from './employeemaster/employeemaster.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeemasterComponent,
    EmployeeupdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
