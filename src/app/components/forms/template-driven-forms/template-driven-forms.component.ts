import { Component } from '@angular/core';
import { TemaplateDrivenFormModel } from './templete-driven-form.model';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {

  species = ['fish', 'cat', 'dog'];
  model = new TemaplateDrivenFormModel(1, 'Choti', this.species[0]);

  submitted = false;

  onSubmit = () => {
    this.submitted = true;
  }
  
}
