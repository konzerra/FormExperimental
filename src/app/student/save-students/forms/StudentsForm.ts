import {FormControl} from "@angular/forms";
import {StudentForm} from "./StudentForm";
import {FooForm} from "./FooForm";
import {Students} from "../model/Students";


export class StudentsForm {
  students: Array<StudentForm> = new Array<StudentForm>()

  foo = new FooForm()

  constructor() {
    this.students.push(new StudentForm())
  }


  addStudent(){
    this.students.push( new StudentForm())
  }

  removeStudent(index: number){
    this.students.splice(index,1)
  }

  isValid():boolean{
    return this.foo.isValid() && this.validateStudents()
  }
  getDto():Students{
    return {
      foo: this.foo.getDto(),
      student: this.students.map(studentForm=>{
        return studentForm.getDto()
      })

    }
  }

  validateStudents(): boolean{
    let valid = true
    this.students.forEach(student=>{
      if(!student.isValid()){
        valid = false
      }
    })
    return valid
  }
}
