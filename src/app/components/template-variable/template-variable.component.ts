import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent {
  inputValue = "";

  submitName(name: string) {
    console.log(name);
    this.inputValue = name;
  }
}
