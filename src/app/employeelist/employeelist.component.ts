import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeList } from './model/EmployeeList';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  Update_EmployeeName = '';
  Update_EmployeeAddress = '';
  Update_EmployeeContact = '';
  Update_EmployeeEmail = '';
  ProgressBarSize:number;
  MaxSize = 10;
  dangerAlert:boolean=false;
  displayedColumns = ['SrNo','EmployeeName','EmployeeAddress','EmployeeContact','EmployeeEmail','EmployeeEdit','EmployeeDelete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

dataSource: MatTableDataSource<EmployeeList>;

employeeElement = [];
constructor() {
  this.ProgressBarSize = 0;
 }
 ngOnInit(): void {
  this.employeeElement = [];
}

onEmployeeAdded(employeeData : {EmployeeName:string,EmployeeAddress:string,EmployeeContact:number,EmployeeEmail:string}){
  if(this.CheckDuplicateItem(employeeData.EmployeeEmail)){
    this.employeeElement.push({
      EmployeeName:employeeData.EmployeeName,
      EmployeeAddress:employeeData.EmployeeAddress,
      EmployeeContact:employeeData.EmployeeContact,
      EmployeeEmail:employeeData.EmployeeEmail
    });
    this.TableReinit();
  }
}

displayStyle = "none";
  
Update(){
    this.employeeElement.forEach((Element)=>{
        if(Element.EmployeeEmail == this.Update_EmployeeEmail){
            Element.EmployeeName = this.Update_EmployeeName;
            Element.EmployeeAddress = this.Update_EmployeeAddress;
            Element.EmployeeContact = parseInt(this.Update_EmployeeContact);
            Element.EmployeeEmail = this.Update_EmployeeEmail;
            this.TableReinit();
            this.closePopup();
        }
    });
}

DeleteElement(index){
  this.employeeElement.splice(index,1);
  this.TableReinit();
}

openPopup(data) {
  this.Update_EmployeeName = data.EmployeeName;
  this.Update_EmployeeAddress = data.EmployeeAddress;
  this.Update_EmployeeContact = data.EmployeeContact;
  this.Update_EmployeeEmail = data.EmployeeEmail;
  this.displayStyle = "block";
}

closePopup() {
  this.displayStyle = "none";
}
closeAlert(){
  this.dangerAlert = false;
}

TableReinit(){
  this.dataSource = new MatTableDataSource(this.employeeElement);  
  this.ProgressBarSize = this.dataSource.data.length * 10;
}

CheckDuplicateItem(EmployeeEmail){
  let counter = 0;
  if(this.employeeElement.length > 0){
      if(this.employeeElement.length >= 10){
            this.dangerAlert = true;
            counter++;
      }
      else{
        this.employeeElement.forEach((Element)=>{
          if(Element.EmployeeEmail == EmployeeEmail)
          counter++;
       });
      }      
  }
  if(counter == 0)
    return true;
   else
    return false; 
}



}
