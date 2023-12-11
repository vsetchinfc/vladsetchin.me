import { Injectable } from '@angular/core';
import { GematrixCalculatorRUService } from './gematrix-calculator-ru.service';
import { GematrixCalculatorENService } from './gematrix-calculator-en.service';

export interface GematrixCalculationResult {
  entry: string;
  ordinal: number;
  reverseOrdinal: number;
}

@Injectable({
  providedIn: 'root'
})
export class GematrixCalculatorService {

  constructor(private ruGematrixCalculator: GematrixCalculatorRUService,
    private enGematrixCalculator: GematrixCalculatorENService) { }

  ///
  /// Return calculated result for a whole line
  public calculate(entry: string): GematrixCalculationResult {
    const charList = entry.split('');
    let ordinal = 0;
    let reverseOrdinal = 0;

    charList.forEach(char => {
      var ordinalIndex = this.enGematrixCalculator.getCharIndex(char)
        + this.ruGematrixCalculator.getCharIndex(char);
      ordinal += ordinalIndex;

      var reverseOrdinalIndex = this.enGematrixCalculator.getReverseCharIndex(char)
        + this.ruGematrixCalculator.getReverseCharIndex(char);
      reverseOrdinal += reverseOrdinalIndex;
    });

    var result = {
      entry: entry,
      ordinal: ordinal,
      reverseOrdinal: reverseOrdinal
    } as GematrixCalculationResult;

    return result;
  }
}
