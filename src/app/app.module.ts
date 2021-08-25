import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SortAppDirective } from './employee/Directive/sort-directive';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/Service/emp.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SortAppDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
