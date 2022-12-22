import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  // ngIf
  hideElement = true;
  showElement = false;

  // ngFor
  people = [
    { name: "Sujai", age: 22 },
    { name: "Chandra", age: 25 },
    { name: "James", age: 21 }
  ]

  // ngSwitch
  me = { name: "James" };

}