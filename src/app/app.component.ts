import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicCardComponent } from '../lib/components/dynamic-card/dynamic-card.component';
import { InputComponent } from '../lib/components/input/input.component';
import { LibraryOverviewComponent } from './library-overview/library-overview.component';

@Component({
  selector: 'app-root',
  imports: [ LibraryOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-storybook';
}
