import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Employee, EmployeeService } from '@employee';

@Component({
 selector: 'main-app',
 templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit {
  employeeWithDeptList: Employee[];
  selectedEmployee:Employee;
  constructor(public empService: EmployeeService){
    this.employeeWithDeptList =[];
    this.selectedEmployee = <Employee>{};
  }
  ngOnInit(){
    this.empService.employeeWithDepartment$.pipe(
      map(result => {
        this.employeeWithDeptList = result;
      })
    ).subscribe()


  }

  onEmployeeSelected(empName:any){
    this.empService.triggerSelectedEmp(empName);
  }


}
