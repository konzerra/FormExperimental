import {FormControl, Validators} from "@angular/forms";
import {Point} from "../model/Point";

export class PointForm {



  // formControl for subject of type string | null with minimum of 2 symbols
  predmet = new FormControl<string>("", [Validators.required, Validators.min(2)])

  // formControl for points of type number | null with minimum of 1
  ball = new FormControl<number | null>(null, [Validators.required, Validators.min(1)])

  getDto(): Point{
    return {
      ball: this.ball.value || 0,
      predmet: this.predmet.value || ""

    }
  }
  isValid():boolean{
    return this.predmet.valid && this.ball.valid
  }
}
