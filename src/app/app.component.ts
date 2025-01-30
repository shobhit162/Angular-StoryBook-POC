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

  twoCards = [
    { title: 'Card 1', description: 'Description for card 1' },
    { title: 'Card 2', description: 'Description for card 2' },
  ];

  threeCards = [
    { title: 'Card 1', description: 'This is the description of card 1.' },
    { title: 'Card 2', description: 'This is the description of card 2.' },
    { title: 'Card 3', description: 'This is the description of card 3.' },
  ];

  smallCards = [
    { title: 'Card A', description: 'Small card description for A.' },
    { title: 'Card B', description: 'Small card description for B.' },
  ];

  noCards: any[] = [];

  clickableCard = [
    {
      title: 'Interactive Card',
      description: 'Click me to see the event in console.log.',
    },
  ];


  onCardClick(cardData: any) {
    console.log('Card clicked:', cardData);
  }
  onValueChange(event: any) {
    console.log('Input changed:', event);
  }
}
