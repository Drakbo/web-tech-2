import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent {
  
  constructor(private router: Router) {}

  student = {
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gpa: '',
    enrollmentStatus: ''
  };

  onSubmit() {
    console.log('Student created:', this.student);
    // Navigate back to students list
    this.router.navigate(['/students']);
  }

  cancel() {
    this.router.navigate(['/students']);
  }
}