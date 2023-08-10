import {HomeForm} from "./HomeForm";
import {FormControl, Validators} from "@angular/forms";
import {Foo} from "../model/Foo";

export class FooForm {
  home = new HomeForm()
  doo = new FormControl<number | null>(null, [Validators.required])
  aaa = new FormControl<string>("", [Validators.required])



  getDto():Foo{
    return {
      aaa: this.aaa.value || "",
      doo: this.doo.value || 0,
      home: this.home.getDto()

    }
  }

  isValid():boolean{
    return this.home.isValid() && this.doo.valid && this.aaa.valid
  }
}
