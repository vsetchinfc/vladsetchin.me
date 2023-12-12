import { Injectable } from '@angular/core';

export class GematrixLetterIndex {
  _index: string = '';
  _letter: string = '';

  constructor(index: string, letter: string) {
    this._index = index;
    this._letter = letter
  }

  getIndex(): number {
    return +this._index;
  }

  getLetter(): string {
    return this._letter;
  }

  // calculate reduced value of char index
  // '14' -> 1 + 4 = 5
  getReducedIndex(): number {
    var numbers = this._index.split('');
    let sum: number = 0;

    numbers.forEach(n => sum += +n);

    return sum;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GematrixCalculatorBaseService {
  letters: GematrixLetterIndex[] = [];
  lettersReverseOrder: GematrixLetterIndex[] = [];

  constructor() { }

  buildListOfLetters(letters: string): GematrixLetterIndex[] {
    let lettersArray: GematrixLetterIndex[] = [];

    for (let i = 0; i < letters.length; i++) {
      lettersArray.push(new GematrixLetterIndex('' + (i + 1), letters[i]));
    }

    return lettersArray;
  }

  getReverseCharIndex(char: string): number {
    return this.getCharArrayIndex(char, this.lettersReverseOrder);
  }

  getCharIndex(char: string): number {
    return this.getCharArrayIndex(char, this.letters);
  }

  getReductionCharIndex(char: string) {
    return this.getReductionCharArrayIndex(char, this.letters);
  }

  getReverseReductionCharIndex(char: string) {
    return this.getReductionCharArrayIndex(char, this.lettersReverseOrder);
  }

  private getCharArrayIndex(char: string, letterIndexes: GematrixLetterIndex[]): number {
    char = char.toUpperCase();

    var index = letterIndexes.find(c => c.getLetter() === char)?.getIndex();

    if (index) {
      return index;  // return as number
    }

    return 0;
  }

  private getReductionCharArrayIndex(char: string, letterIndexes: GematrixLetterIndex[]): number {
    char = char.toUpperCase();

    var index = letterIndexes.find(c => c.getLetter() === char)?.getReducedIndex();

    if (index) {
      return index;  // return as number
    }

    return 0;
  }
}
