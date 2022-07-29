import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {

  Update_EmployeeName = '';
  constructor() { }
  displayStyle = "none";
  
openPopup() {
  this.displayStyle = "block";
}
closePopup() {
  this.displayStyle = "none";
}

  ngOnInit(): void {
  }

}
