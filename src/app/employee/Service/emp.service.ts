import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, of, Subject } from "rxjs";
import{ map} from "rxjs/operators";
import { EmployeeData, Employee } from '@employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(){

  }
  private selectedEmployeeAction = new Subject<string>();
  public selectedEmployeeAction$ = this.selectedEmployeeAction.asObservable();

  public employee$ = of(EmployeeData.employees);
  public department$ = of(EmployeeData.departments);
  public employeeWithDepartment$ =
    combineLatest([this.employee$, this.department$])
    .pipe(
      map(([employees, departments]) =>
        employees.map(
          emp=> ({
            ...emp,
            deptName: departments.find(c=>c.deptId === emp.deptId)?.deptName
          }) as Employee
        )
    )
    )

    public selectedEmployee$ =
    combineLatest([this.selectedEmployeeAction$, this.employeeWithDepartment$])
    .pipe(
      map(([selectedEmployee, employeeWithDept]) =>
        employeeWithDept.find(c=>c.employeeName === selectedEmployee)
      )
    )

    triggerSelectedEmp(empName: any) {
      this.selectedEmployeeAction.next(empName);
    }
}
