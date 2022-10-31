import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent{

  @Input() name = '';
  @Output() out = new EventEmitter();

  buttonClicked() {
    this.out.emit('Child to Parent');
  }

}
