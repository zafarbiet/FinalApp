import { EmployeeData } from "../Data/employee-data";
import { Employee } from "../Model/employee-model";
import { Sort } from "./sort"

describe('sort method', async () => {
  let sort: Sort;
  let sortOrder: any;
  let property: any;
  let empList:Employee[];
  beforeEach(()=>{
    sort = new Sort();
    property = 'employeeName';
    empList = EmployeeData.employees;
  })

  it('sort by desc', async () => {
    expect(empList.sort(sort.startSort(property, "desc"))[0].employeeName).toBe('Zafar4')
  })

  it('sort by asc', async () => {
    expect(empList.sort(sort.startSort(property, "asc"))[0].employeeName).toBe('Zafar')
  })
})
