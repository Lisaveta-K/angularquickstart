import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
	age: number;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{hero.name}} - details.</h2>
  <div><label>id:</label>{{hero.id}}</div>
  <div>
	  <label>name:</label>
	  <input [(ngModel)]="hero.name" placeholder="Name">
  </div>
  <div>
  <label>age:</label>
  	<input type="number" value="{{hero.age}}">
  </div>`,
})

export class AppComponent  { 
	title = 'The True Heroes';
	hero: Hero = {
		id: 12,
		name: 'The Doctor',
		age: 1200
	};
}
