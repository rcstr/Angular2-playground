import {Component, Template, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@Template({
  inline: '<h1>Hello {{ name }}</h1>'
})

// Component Controller
class MyAppController {
  constructor() {
    this.name = 'Rommel';
  }
}

bootstrap(MyAppController);