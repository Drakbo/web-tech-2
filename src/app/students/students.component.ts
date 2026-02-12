import { CommonModule } from "@angular/common";
import { Component, inject, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";
import { GetStudent } from "../../models/student.model";
import { StudentsService } from "../../services/students/students.service";

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly studentsService = inject(StudentsService);
  
  public students = signal<GetStudent[]>([]);

  async ngOnInit(): Promise<void> {
    const students = await this.studentsService.getStudents();
    this.students.set(students);
  }

  goToCreateStudent() {
    this.router.navigate(['/create-student']);
  }

  async deleteStudent(studentId: string): Promise<void> {
    try {
      await this.studentsService.deleteStudent(studentId);
      this.students.set(this.students().filter(student => student.id !== studentId));
    } catch (error) {
      console.error(error);
    }
  }
}