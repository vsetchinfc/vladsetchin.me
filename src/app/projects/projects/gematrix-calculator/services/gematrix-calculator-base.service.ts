import { Injectable } from '@angular/core';

export interface GematrixLetterIndex {
  index: number;
  letter: string;
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
      lettersArray.push({ letter: letters[i], index: i + 1 });
    }

    return lettersArray;
  }

  getReverseCharIndex(char: string): number {
    return this.getCharArrayIndex(char, this.lettersReverseOrder);
  }

  getCharIndex(char: string): number {
    return this.getCharArrayIndex(char, this.letters);
  }

  private getCharArrayIndex(char: string, letters: GematrixLetterIndex[]): number {
    char = char.toUpperCase();

    var index = letters.find(c => c.letter === char)?.index;

    if (index) {
      return index;
    }

    return 0;
  }
}
