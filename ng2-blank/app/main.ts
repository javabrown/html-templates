import {Component, Directive} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {Hello} from    './directives/hello';

@Component({
	selector: 'my-app',
	 
	directives: [Hello],
	template: '<h1>Hello {{a}}</h1> <br/> <input [(ngModel)]="a" value="{{a}}" hello /> '
})

export class MyComponent {
    a : "Raja Khan";
};

bootstrap(MyComponent, [])