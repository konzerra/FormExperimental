import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SaveStudentsComponent } from './save-students/save-students.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SaveStudentsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
