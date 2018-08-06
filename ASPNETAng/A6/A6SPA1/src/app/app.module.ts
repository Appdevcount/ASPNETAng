import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import RouterModule
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';

// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /list

// pathMatch property value can be full or prefix. For now we
// will set it to full as we want to do a full match.
const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

// To let the router know about the routes configured above,
// pass "appRoutes" constant to forRoot(appRoutes) method
// We also have forChild() method. We will discuss the difference
// and when to use one over the other

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  // Include RouterModule in the "imports" array of the @NgModule() decorator
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
