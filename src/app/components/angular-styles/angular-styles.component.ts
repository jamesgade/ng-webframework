import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-angular-styles',
  templateUrl: './angular-styles.component.html',
  styles: ['.ts-styles {color: pink}'],
  styleUrls: ['./angular-styles.component.css'],
  // encapsulation : making styles unique to this component (inspect element to find out)
  // encapsulation: ViewEncapsulation.None,
})
export class AngularStylesComponent {

}
