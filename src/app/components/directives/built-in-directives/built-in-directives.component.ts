import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.css']
})
export class BuiltInDirectivesComponent implements OnInit {
  // ngClass
  isSpecial = false;
  currentClasses = {};

  // ngStyle
  currentStyles = {};

  // ngModel
  name = "";

  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  //ngClass
  setCurrentClasses = () => {
    this.currentClasses = {
      special: true,
      required: false,
      container: true,
    }
  }

  //ngStyle
  setCurrentStyles = () => {
    this.currentStyles = {
      'font-size': '75px',
      'color': 'pink'
    }
  }
}
