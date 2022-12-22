import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {

  // template driven form validation
  nameInput = '';

  // reactive form validation
  // personName = '';
  validationForm = new FormGroup({
    name: new FormControl(this.nameInput, [
      Validators.required,
      Validators.minLength(6)
    ]),
  })

  get name() {
    return this.validationForm.get('name');
  } 
}
