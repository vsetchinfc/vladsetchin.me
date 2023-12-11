import { Component } from '@angular/core';
import { GematrixCalculatorService, GematrixCalculationResult } from './services/gematrix-calculator.service';

@Component({
  selector: 'blog-gematrix-calculator',
  templateUrl: './gematrix-calculator.component.html',
  styleUrls: ['./gematrix-calculator.component.scss']
})
export class GematrixCalculatorComponent {
  calculationResults: GematrixCalculationResult[] = [];

  constructor(private gematrixCalculator: GematrixCalculatorService
  ) {
  }

  onTextChange(event: Event): void {
    this.calculationResults = [];
    const textValue = (event.target as HTMLTextAreaElement).value;

    textValue.split('\n').forEach(line => {
      console.log('Text line:', line);

      var result = this.gematrixCalculator.calculate(line);
      this.calculationResults.push(result);
    });
  }
}
