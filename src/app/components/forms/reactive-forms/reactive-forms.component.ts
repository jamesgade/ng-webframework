import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  name = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName:  new FormControl(''),
  })

  updateName() {
    this.name.setValue('James');
  }

  onSubmit = () => {
    console.warn(this.profileForm.value);
  }
}
