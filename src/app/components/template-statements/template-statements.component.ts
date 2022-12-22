import { Component } from '@angular/core';

@Component({
  selector: 'app-template-statements',
  templateUrl: './template-statements.component.html',
  styleUrls: ['./template-statements.component.css']
})
export class TemplateStatementsComponent {
  showText: boolean = false;

  toggleShowText = (event: any) => {
    this.showText = !this.showText;
    console.log(event);
  }
}
