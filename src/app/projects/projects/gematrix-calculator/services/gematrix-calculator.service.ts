import { Injectable } from '@angular/core';
import { OrdinalCipherService } from './ciphers/ordinal-cipher.service';
import { ReductionCipherService } from './ciphers/reduction-cipher.service';
import { ReverseCipherService } from './ciphers/reverse-cipher.service';
import { ReverseReductionCipherService } from './ciphers/reverse-reduction-cipher.service';

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

  constructor(private ordinalCipher: OrdinalCipherService,
    private reductionCipher: ReductionCipherService,
    private reverseCipher: ReverseCipherService,
    private reverseReductionCipher: ReverseReductionCipherService) { }

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
        var ordinalIndex = this.ordinalCipher.getCharIndex(char);
        ordinal += ordinalIndex;

        var reductionIndex = this.reductionCipher.getCharIndex(char);
        reduction += reductionIndex;

        var reverseIndex = this.reverseCipher.getCharIndex(char);
        reverse += reverseIndex;

        var reverseReductionIndex = this.reverseReductionCipher.getCharIndex(char);
        reverseReduction += reverseReductionIndex;
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
