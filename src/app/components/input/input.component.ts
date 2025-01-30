import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {

  /** What width to use */
  @Input()
  width?: string;

  /** What height to use */
  @Input()
  height?: string;

  /** How large should the border radius be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Input content
   *
   * @required
   */
  @Input()
  value: string = '';

  /** Change handler */
  @Output() valueChange = new EventEmitter<string>();

  onInput() {
    this.valueChange.emit(this.value);
  }

  public get classes(): string[] {
    return ['inputClass', `border-radius--${this.size}`];
  }
}
