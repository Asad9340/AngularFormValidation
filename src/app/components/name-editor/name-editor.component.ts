import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.css',
})
export class NameEditorComponent implements OnInit {
  newsList: any;
  initValue='Asad'
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

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchData();
  }
  public fetchData(): void {
    this.http
      .get('https://api.first.org/data/v1/news')
      .subscribe((res: any) => {
        console.log(res.data);
        this.newsList = res.data;
      });
  }
}
