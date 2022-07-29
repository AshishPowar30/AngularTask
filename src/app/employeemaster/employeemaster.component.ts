import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-employeemaster',
  templateUrl: './employeemaster.component.html',
  styleUrls: ['./employeemaster.component.css']
})
export class EmployeemasterComponent implements OnInit {
  EmployeeName:string;
  EmployeeAddress:string;
  EmployeeContact:number;
  EmployeeEmail:string;

  @Output() EmployeeCreated = new EventEmitter<{EmployeeName:string,EmployeeAddress:string,EmployeeContact:number,EmployeeEmail:string}>();

  constructor() {
       this.EmployeeName = '';
       this.EmployeeAddress = '';
       this.EmployeeContact = 0;
       this.EmployeeEmail = '';
   }

  onAddEmployee(){
    this.EmployeeCreated.emit({
      EmployeeName:this.EmployeeName,
      EmployeeAddress:this.EmployeeAddress,
      EmployeeContact:this.EmployeeContact,
      EmployeeEmail:this.EmployeeEmail
    });
    this.onProgressbarChanges();
  }

  ngOnInit(): void {
    this.EmployeeName = '';
    this.EmployeeAddress = '';
    this.EmployeeContact = 0;
    this.EmployeeEmail = ''; 
  }


  onProgressbarChanges(){
    this.EmployeeName = this.EmployeeAddress = this.EmployeeEmail = ''; 
    this.EmployeeContact = 0;
  }


}
