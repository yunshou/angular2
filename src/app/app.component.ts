import { Component } from '@angular/core';
import { HeaderComponent } from './header';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[HeaderComponent]
})
export class AppComponent {

}
