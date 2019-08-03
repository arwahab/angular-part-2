import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    
    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{person | json}}</h2>
   
    `, 
  styles: []
})

export class TestComponent implements OnInit {

  public name = "Issay Call";
  public message = "Lagti hayy?"

  public person = {
    "firstName": "Ballakulli",
    "lastName": "Killakillaw"
  }

  constructor() { }

  ngOnInit() {
  }


}
