import { Injectable } from '@angular/core';
import { GematrixCalculatorBaseService, GematrixLetterIndex } from './gematrix-calculator-base.service';

@Injectable({
  providedIn: 'root'
})
export class GematrixCalculatorRUService extends GematrixCalculatorBaseService {
  constructor() {
    super();

    // Russian Alphabet
    const russianLetters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    const russianLettersReverseOrder = russianLetters.split('').reverse().join('');

    this.letters = this.buildListOfLetters(russianLetters);
    this.lettersReverseOrder = this.buildListOfLetters(russianLettersReverseOrder);
  }
}
