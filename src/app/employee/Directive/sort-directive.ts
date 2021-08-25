import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { Employee } from "@employee";

import { Sort } from "../Utility/sort";

@Directive({
  selector:'[sortApp]'
})

export class SortAppDirective {
  @Input() sortApp: Employee[];
  //sort: Sort;
  constructor(public elementRef: ElementRef)
  {
    this.sortApp = [];

  }
  @HostListener('click')

  SortMe(){
    let sort = new Sort();
    let elementReference = this.elementRef.nativeElement;
    let sortOrder = elementReference.getAttribute('sort-order');
    let property = elementReference.getAttribute('sort-id');

    this.sortApp.sort(sort.startSort(property, sortOrder));
    if(sortOrder === 'desc'){
      elementReference.setAttribute('sort-order', 'asc');
    } else {
      elementReference.setAttribute('sort-order', 'desc');
    }
  }
}
