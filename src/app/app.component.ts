import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form';
  tech:any = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  }
  arr: string[] = Object.keys(this.tech);
  form: FormGroup;
  vers: string[];

  constructor() {
    this.form = new FormGroup({
      contr4: new FormControl(),
      contr5: new FormControl()
    })
    this.vers = []
  }

  ngOnInit(): void {
  }

  setArr() {
    const key:string = this.form.controls.contr4.value;
    if (key) {
      this.vers = this.tech[key]
    }
  }
}
