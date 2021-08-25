import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SortAppDirective, EmployeeComponent } from './index';

describe('employee controller test',async () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let elemRef: DebugElement
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent, SortAppDirective]
    }).compileComponents();
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    elemRef = fixture.debugElement;
  })

  it('test if 5 rows returned',async () => {
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelectorAll('tr').length).toBe(5);
  })
  it('sort by desc',async () => {
    const elementRef= fixture.debugElement.nativeElement.querySelectorAll('th');
    expect(elementRef[0].getAttribute('sort-order').trim()).toBe('desc');
    fixture.detectChanges();
    elementRef[0].click();
    fixture.detectChanges();
    expect(elementRef[0].getAttribute('sort-order').trim()).toBe('asc');

    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      let taableRows = fixture.debugElement.nativeElement.querySelectorAll('tr');
      let headerRows = taableRows[0];

      expect(headerRows.cells[0].innerHTML.trim()).toBe('Employee Name');
      expect(headerRows.cells[1].innerHTML.trim()).toBe('Employee Department');

      let dataRows = taableRows[1];

      expect(dataRows.cells[0].innerHTML.trim()).toBe('Zafar4');
      expect(dataRows.cells[1].innerHTML.trim()).toBe('IT');
    })

  })

  it('sort by asc',async () => {
    const elementRef= fixture.debugElement.nativeElement.querySelectorAll('th');
    elementRef[0].setAttribute('sort-order','asc')
    expect(elementRef[0].getAttribute('sort-order').trim()).toBe('asc');
    fixture.detectChanges();
    elementRef[0].click();
    fixture.detectChanges();
    expect(elementRef[0].getAttribute('sort-order').trim()).toBe('desc');

    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      let taableRows = fixture.debugElement.nativeElement.querySelectorAll('tr');
      let headerRows = taableRows[0];

      expect(headerRows.cells[0].innerHTML.trim()).toBe('Employee Name');
      expect(headerRows.cells[1].innerHTML.trim()).toBe('Employee Department');

      let dataRows = taableRows[1];

      expect(dataRows.cells[0].innerHTML.trim()).toBe('Zafar');
      expect(dataRows.cells[1].innerHTML.trim()).toBe('HR');
    })

  })
})
