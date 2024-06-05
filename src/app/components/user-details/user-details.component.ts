import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  isDisabled = true;
  @Input() employees: any[] = [];
  employeeForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  
  handleSubmit(event: any) {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;
    const country = form.country.value;
    const salary = form.salary.value;
    const designation = form.designation.value;
    const employeeData = {
      firstName,
      lastName,
      email,
      number,
      address,
      country,
      salary,
      designation,
    };
    this.employees.push(employeeData);
    console.log(this.employees);
  }

  handleDelete(email: string) {
    const indexToDelete = this.employees.findIndex(
      (employee) => employee.email === email
    );
    this.employees.splice(indexToDelete, 1);
  }
}
