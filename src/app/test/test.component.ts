import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    
    <h2>{{"Hello " + name}}</h2>
    <button (click)="sendToParent()">Send Event</button>

    `, 
  styles: []
})

export class TestComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  sendToParent(){
    this.childEvent.emit("Hey Bobo");
  }

  constructor() { }

  ngOnInit() {
  }


}
