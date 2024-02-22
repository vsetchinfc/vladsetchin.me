import { Component } from '@angular/core';
import { GematrixCalculatorService, GematrixCalculationResult } from './services/gematrix-calculator.service';

@Component({
  selector: 'blog-gematrix-calculator',
  templateUrl: './gematrix-calculator.component.html',
  styleUrls: ['./gematrix-calculator.component.scss']
})
export class GematrixCalculatorComponent {
  calculationResult: GematrixCalculationResult = {} as GematrixCalculationResult;

  constructor(private gematrixCalculator: GematrixCalculatorService
  ) {
  }

  onTextChange(event: Event): void {
    const textValue = (event.target as HTMLTextAreaElement).value;

    textValue.split('\n').forEach(line => {
      console.log('Text line:', line);

      this.calculationResult = this.gematrixCalculator.calculate(line);
    });
  }
}
