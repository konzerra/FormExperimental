import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SaveStudentsComponent} from "./save-students/save-students.component";

const routes: Routes = [
  { path: '', redirectTo: 'save', pathMatch: 'full' },
  { path: 'save', component: SaveStudentsComponent },
  { path: '**', redirectTo: 'save', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
