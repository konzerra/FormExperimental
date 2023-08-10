import {FormControl, Validators} from "@angular/forms";
import {PointForm} from "./PointForm";
import {Student} from "../model/Student";

export class StudentForm {

  id = new FormControl<number | null>(null, [Validators.required])
  name = new FormControl<string>("", [Validators.required, Validators.min(3)])
  point: Array<PointForm> = new Array<PointForm>()

  // for UI to collapse
  isCollapsed: boolean = false

  constructor() {
    this.point.push(new PointForm())
  }

  addPoint(){
    this.point.push(new PointForm())
  }

  removePoint(index:number){
    this.point.splice(index,1)
  }


  getDto():Student{
    return {
      id: this.id.value || 0,
      name: this.name.value || "", //if null return empty string, so call is valid before getDto
      point: this.point.map(pointForm => {
        return pointForm.getDto();
      })
    }
  }
  isValid():boolean{
    return this.validPoints() && this.id.valid && this.name.valid
  }

  validPoints():boolean{
    let valid = true
    this.point.forEach(point =>{
      if(!point.isValid()){
        valid = false
      }
    })
    return valid
  }
}
