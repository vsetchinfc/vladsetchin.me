import { Injectable } from '@angular/core';
import { GematrixCalculatorRUService } from './gematrix-calculator-ru.service';
import { GematrixCalculatorENService } from './gematrix-calculator-en.service';

export interface GematrixCalculationResult {
  entry: string;
  ordinal: number;
  reduction: number;
  reverse: number;
  reverseReduction: number;
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
    const wordList = entry.split(' ');
    let ordinal = 0;
    let reverse = 0;
    let reduction = 0;
    let reverseReduction = 0;

    wordList.forEach(word => {
      const charList = word.split('');

      charList.forEach(char => {
        // check if it is russian
        if (this.ruGematrixCalculator.russianLetters.split('').find(l => l === char.toUpperCase())) {
          // it is Russian! 
          var ordinalIndex = this.ruGematrixCalculator.getCharIndex(char)
          ordinal += ordinalIndex;

          var reverseOrdinalIndex = this.ruGematrixCalculator.getReverseCharIndex(char);
          reverse += reverseOrdinalIndex;

          var reductionIdex = this.ruGematrixCalculator.getReductionCharIndex(char);
          reduction += reductionIdex;

          var reverseReductionIndex = this.ruGematrixCalculator.getReverseReductionCharIndex(char);
          reverseReduction += reverseReductionIndex;
        } else {
          // check if it is a date

          // working with english here
          var ordinalIndex = this.enGematrixCalculator.getCharIndex(char);
          ordinal += ordinalIndex;

          var reverseOrdinalIndex = this.enGematrixCalculator.getReverseCharIndex(char);
          reverse += reverseOrdinalIndex;

          var reductionIdex = this.enGematrixCalculator.getReductionCharIndex(char);
          reduction += reductionIdex;

          var reverseReductionIndex = this.enGematrixCalculator.getReverseReductionCharIndex(char);
          reverseReduction += reverseReductionIndex;
        }
      })
    });

    var result = {
      entry: entry,
      ordinal: ordinal,
      reduction: reduction,
      reverse: reverse,
      reverseReduction: reverseReduction
    } as GematrixCalculationResult;

    return result;
  }
}
