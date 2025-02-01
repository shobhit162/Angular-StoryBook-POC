import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-card',
  imports: [CommonModule],
  templateUrl: './dynamic-card.component.html',
  styleUrl: './dynamic-card.component.css',
})
export class DynamicCardComponent {
  /** Card data */
  @Input() cards: { title: string; description: string }[] = [];

  /** What width to use */
  @Input()
  width?: string;

  /** What height to use */
  @Input()
  height?: string;

  /** Font size */
  @Input()
  size: string = 'medium';

  /** Change handler */
  @Output() cardClick = new EventEmitter<string>();

  onCardClick(index: number) {
    this.cardClick.emit(this.cards[index].title);
  }

  public get classes(): string[] {
    return ['card',];
  }
}
