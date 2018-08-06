"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListEmployeesComponent = /** @class */ (function () {
    function ListEmployeesComponent() {
        this.employees = [
            {
                id: 1,
                name: 'Mark',
                gender: 'Male',
                contactPreference: 'Email',
                email: 'mark@pragimtech.com',
                dateOfBirth: new Date('10/25/1988'),
                department: 'IT',
                isActive: true,
                photoPath: '../../../../assets/images/mark.png'
            },
            {
                id: 2,
                name: 'Mary',
                gender: 'Female',
                contactPreference: 'Phone',
                phoneNumber: 2345978640,
                dateOfBirth: new Date('11/20/1979'),
                department: 'HR',
                isActive: true,
                photoPath: '../ASPNETAng6/a6/a6spa1/src/assets/images/mary.png'
            },
            {
                id: 3,
                name: 'John',
                gender: 'Male',
                contactPreference: 'Phone',
                phoneNumber: 5432978640,
                dateOfBirth: new Date('3/25/1976'),
                department: 'IT',
                isActive: false,
                photoPath: '../../a6/a6spa1/src/assets/images/john.png'
            },
        ];
    }
    ListEmployeesComponent.prototype.ngOnInit = function () {
    };
    ListEmployeesComponent = __decorate([
        core_1.Component({
            selector: 'app-list-employees',
            templateUrl: './list-employees.component.html',
            styleUrls: ['./list-employees.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ListEmployeesComponent);
    return ListEmployeesComponent;
}());
exports.ListEmployeesComponent = ListEmployeesComponent;
//# sourceMappingURL=list-employees.component.js.map