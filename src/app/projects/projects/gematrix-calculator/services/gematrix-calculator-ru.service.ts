import { Injectable } from '@angular/core';
import { GematrixCalculatorBaseService } from './gematrix-calculator-base.service';

@Injectable({
  providedIn: 'root'
})
export class GematrixCalculatorRUService extends GematrixCalculatorBaseService {
  // Russian Alphabet
  russianLetters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

  constructor() {
    super();

    const russianLettersReverseOrder = this.russianLetters.split('').reverse().join('');

    this.letters = this.buildListOfLetters(this.russianLetters);
    this.lettersReverseOrder = this.buildListOfLetters(russianLettersReverseOrder);
  }
}
