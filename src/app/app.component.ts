import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-list';
  selectedFeature = 'recipe'
  selectItem($event) {
    this.selectedFeature = $event;
  }
}
