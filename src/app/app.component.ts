import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab-training';
  form: FormGroup;
  customErrors = { pattern: `This field accepts only numbers` }


  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }
}
