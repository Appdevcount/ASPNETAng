"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
// Import RouterModule
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var list_employees_component_1 = require("./employees/list-employees/list-employees.component");
var create_employee_component_1 = require("./employees/create-employee/create-employee.component");
// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /list
// pathMatch property value can be full or prefix. For now we
// will set it to full as we want to do a full match.
var appRoutes = [
    { path: 'list', component: list_employees_component_1.ListEmployeesComponent },
    { path: 'create', component: create_employee_component_1.CreateEmployeeComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];
// To let the router know about the routes configured above,
// pass "appRoutes" constant to forRoot(appRoutes) method
// We also have forChild() method. We will discuss the difference
// and when to use one over the other
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                list_employees_component_1.ListEmployeesComponent,
                create_employee_component_1.CreateEmployeeComponent
            ],
            // Include RouterModule in the "imports" array of the @NgModule() decorator
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map