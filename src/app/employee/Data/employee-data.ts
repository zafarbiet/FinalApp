import { Department, Employee } from "@employee";

export class EmployeeData {
  static departments: Department[] = [
    {
      deptId: 1,
      deptName: 'IT'
    },
    {
      deptId: 2,
      deptName: 'HR'
    }
  ];
  static employees: Employee[] =[
    {
      employeeName: "Zafar",
      employeeAge: 35,
      deptId : 2
    },
    {
      employeeName: "Zafar1",
      employeeAge: 36,
      deptId : 2
    },
    {
      employeeName: "Zafar2",
      employeeAge: 37,
      deptId : 2
    },
    {
      employeeName: "Zafar4",
      employeeAge: 38,
      deptId : 1
    }
  ];
}
