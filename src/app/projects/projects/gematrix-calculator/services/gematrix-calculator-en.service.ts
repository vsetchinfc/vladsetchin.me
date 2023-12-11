import { Injectable } from '@angular/core';
import { GematrixCalculatorBaseService, GematrixLetterIndex } from './gematrix-calculator-base.service';

@Injectable({
  providedIn: 'root'
})
export class GematrixCalculatorENService extends GematrixCalculatorBaseService {
  constructor() {
    super();

    // English Alphabet
    const englishLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let englishLettersReverseOrder = englishLetters.split('').reverse().join('');

    this.letters = this.buildListOfLetters(englishLetters);
    this.lettersReverseOrder = this.buildListOfLetters(englishLettersReverseOrder);
  }
}
