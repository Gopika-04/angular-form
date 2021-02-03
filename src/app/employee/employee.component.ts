import { EmployeesService } from './employees.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent  {
  @ViewChild('empForm') gopikaForm!:NgForm; 
  
  employees:any;
  fullname?:string;
  lastname?:string;
  division?:string;
  constructor(private empService:EmployeesService) {
    console.log(empService.getEmployees());
    empService.getEmployees().subscribe(data=>{
      console.log(data);
      this.employees=data;
    });
  }
  onSubmit(){
    console.log(this.gopikaForm);
    if (!this.gopikaForm.form.touched) {
      alert('please enter value');
    }
    console.log('onfetch',this.gopikaForm.form.value);
  }
}

   
   
  

