import { Component } from '@angular/core';
import {StudentsForm} from "./forms/StudentsForm";
import {FormControl} from "@angular/forms";
import {StudentForm} from "./forms/StudentForm";
import {PointForm} from "./forms/PointForm";

@Component({
  selector: 'app-save-students',
  templateUrl: './save-students.component.html',
  styleUrls: ['./save-students.component.css']
})
export class SaveStudentsComponent {

  constructor(

  ) {
  }
  studentsForm = new StudentsForm()



  checkFormControl(formControl: FormControl): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched)
  }

  onSubmit() {
    if(this.studentsForm.isValid()){


      console.log(JSON.stringify(this.studentsForm.getDto()))
      console.log(this.studentsForm.getDto())
    }

  }

  onCancelClicked() {

  }

  toggleCollapse(student: StudentForm) {
    student.isCollapsed = !student.isCollapsed
  }

  onAddStudent() {
    this.studentsForm.addStudent()
  }

  onRemoveStudent(index: number){
    this.studentsForm.removeStudent(index)
  }

  onRemovePoint(studentIndex: number, pointIndex: number) {
    this.studentsForm.students[studentIndex].removePoint(pointIndex)
  }

  onPointAdd(index: number) {
    this.studentsForm.students[index].addPoint()
  }
}
