import { Component } from '@angular/core';
import { DynamicCardPresets } from '../../lib/presets/dynamic-card.presets';
import { InputPresets } from '../../lib/presets/input.presets';
import { DynamicCardComponent } from '../../lib/components/dynamic-card/dynamic-card.component';
import { InputComponent } from '../../lib/components/input/input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-library-overview',
  imports: [DynamicCardComponent, InputComponent, CommonModule],
  templateUrl: './library-overview.component.html',
  styleUrl: './library-overview.component.css',
})
export class LibraryOverviewComponent {
  dynamicCardPresets = DynamicCardPresets;
  inputPresets = InputPresets;
  selectedPreset: any = null;
  showCode: boolean = false;

  ngOnInit() {
    this.selectedPreset = this.dynamicCardPresets[0];
  }

  onDynamicCardClick(title: string) {
    alert(`Card clicked: ${title}`);
  }

  onInputChange(value: string) {
    console.log(`Input value changed: ${value}`);
  }

  selectPreset(preset: any) {
    this.selectedPreset = preset;
    this.showCode = false;
  }

  toggleCode() {
    this.showCode = !this.showCode;
  }

  getCode(): string {
    if (this.selectedPreset.cards) {
      return `
      // dynamic-card.component.ts
      import { CommonModule } from '@angular/common';
      import { Component, Input, Output, EventEmitter } from '@angular/core';
      
      @Component({
        selector: 'app-dynamic-card',
        imports: [CommonModule],
        templateUrl: './dynamic-card.component.html',
        styleUrl: './dynamic-card.component.css',
      })
      export class DynamicCardComponent {
        @Input() cards: { title: string; description: string }[] = [];
  
        @Input() width?: string;
      
        @Input() height?: string;
      
        @Input() size: string = 'medium';
      
        @Output() cardClick = new EventEmitter<string>();
      
        onCardClick(index: number) {
          this.cardClick.emit(this.cards[index].title);
        }
      
        public get classes(): string[] {
          return ['card',];
        }
      }
      
      // dynamic-card.component.html
      <div
      [ngClass]="classes"
      *ngFor="let card of cards; let i = index"
      [ngStyle]="{ width: width, height: height }"
      (click)="onCardClick(i)"
      >
      <h3 [ngStyle]="{'font-size': size}">{{ card.title }}</h3>
      <p [ngStyle]="{'font-size': size}">{{ card.description }}</p>
      </div>

      // Usage in your project
      <app-dynamic-card
        [cards]="'${this.selectedPreset.cards}'"
        [width]="'${this.selectedPreset.width}'"
        [height]="'${this.selectedPreset.height}'"
        [size]="'${this.selectedPreset.size}'"
        (cardClick)="onDynamicCardClick($event)"
       ></app-dynamic-card>
      `;
    } else {
      return `
// input.component.ts
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
  @Input() width?: string;
  @Input() height?: string;
  @Input() disabled: boolean = false;
  @Input() size: string = 'medium';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput() {
    this.valueChange.emit(this.value);
  }

  public get classes(): string[] {
    return ['inputClass', \`border-radius--\${this.size}\`];
  }
}

// input.component.html
<input
  type="text"
  (input)="onInput()"
  [ngClass]="classes"
  [(ngModel)]="value"
  [ngStyle]="{ 'width': width, 'height': height }"
  [disabled]="disabled"
/>

// Usage in your project
<app-input
  [width]="'${this.selectedPreset.width}'"
  [height]="'${this.selectedPreset.height}'"
  [value]="'${this.selectedPreset.value}'"
  (valueChange)="onInputChange($event)"
  [disabled]="${this.selectedPreset.disabled}"
  [size]="'${this.selectedPreset.size}'"
></app-input>
      `;
    }
  }
}
