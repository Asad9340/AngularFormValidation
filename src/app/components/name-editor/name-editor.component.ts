import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-editor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.css',
})
export class NameEditorComponent {
  isUpdate: boolean = false;
  indexValue!: number;
  @Input() employeesList: any[] = [];
  employeeForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
  });
  constructor(private router: Router) {}
  onSubmit() {
    this.employeesList.push(this.employeeForm.value);
    this.employeeForm.reset();
  }

  onUpdate() {
    const updatedData = this.employeeForm.value;
    this.employeesList[this.indexValue] = updatedData;
  }
  handleDelete(email: string) {
    const indexToDelete = this.employeesList.findIndex(
      (employee) => employee.email === email
    );
    this.employeesList.splice(indexToDelete, 1);
  }

  handleUpdate(email: string) {
    this.isUpdate = true;
    const indexToUpdate = this.employeesList.findIndex(
      (employee) => employee.email === email
    );
    this.indexValue = indexToUpdate;
    this.employeeForm.patchValue({
      firstName: this.employeesList[indexToUpdate].firstName,
      lastName: this.employeesList[indexToUpdate].lastName,
      email: this.employeesList[indexToUpdate].email,
      number: this.employeesList[indexToUpdate].number,
      address: this.employeesList[indexToUpdate].address,
      country: this.employeesList[indexToUpdate].country,
      salary: this.employeesList[indexToUpdate].salary,
      designation: this.employeesList[indexToUpdate].designation,
    });
  }
}
