import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>();

  resize(n: number) {
    this.size = Math.min(40, Math.max(8, +this.size + n));
    this.sizeChange.emit(this.size);
  }

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }
}
