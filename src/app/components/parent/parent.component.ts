import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  // passing data from child to parent using ViewChild
  @ViewChild(ChildComponent) childComponent: any;

  // passing data from child to parent
  receiveMessage = (msg: any) => {
    alert(msg);
  }

  // passing data from child to parent using ViewChild
  ngAfterViewInit() {
    alert(this.childComponent.messageWithViewChild);
  }
}
