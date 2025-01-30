import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicCardComponent } from './components/dynamic-card/dynamic-card.component';
import { InputComponent } from './components/input/input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DynamicCardComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-storybook';

  handleCardClick(event: any) {
    console.log('Card clicked:', event);
  }
  handleInputChannge(event: any) {
    console.log('Input changed:', event);
  }
}
