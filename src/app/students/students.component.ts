import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  
  constructor(private router: Router) {}

  students = [
    { name: 'Juan Dela Cruz', course: 'BSIT', year: '3rd Year' },
    { name: 'Maria Santos', course: 'BSCS', year: '2nd Year' },
    { name: 'Pedro Reyes', course: 'BSIT', year: '4th Year' }
  ];

  goToCreateStudent() {
    this.router.navigate(['/create-student']);
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}