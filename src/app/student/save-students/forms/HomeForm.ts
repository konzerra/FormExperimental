import {FormControl, Validators} from "@angular/forms";
import {Home} from "../model/Home";

export class HomeForm {
  id = new FormControl<number | null>(null, [Validators.required])


  getDto(): Home{
    return {
      id: this.id.value || 0 //return 0 if value is null
    }
  }
  isValid():boolean{
    return this.id.valid
  }
}
