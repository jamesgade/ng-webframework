import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // passing data from parent to child
  @Input() parentToChild: string;

  // passing data from child to parent
  @Output() childToParent = new EventEmitter<string>();

  // passing data from child to parent using ViewChild
  messageWithViewChild: string = "Message from child to parent using ViewChild"

  // passing data from child to parent
  sendMessage = () => {
    this.childToParent.emit('Hello from child to parent using output decorator')
  }
}
