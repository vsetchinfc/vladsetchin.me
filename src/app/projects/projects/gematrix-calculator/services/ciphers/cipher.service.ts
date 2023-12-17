import { Injectable } from '@angular/core';
import { GematrixLetterIndex } from '../../models';
import { AlphabetConstants, CipherType } from '../../common';

@Injectable({
  providedIn: 'root'
})
export class CipherService {
  cipherType: CipherType = CipherType.None;

  enLetters: GematrixLetterIndex[] = [];
  ruLetters: GematrixLetterIndex[] = [];

  constructor() { }

  buildListOfLetters(letters: string): GematrixLetterIndex[] {
    let lettersArray: GematrixLetterIndex[] = [];

    for (let i = 0; i < letters.length; i++) {
      lettersArray.push({
        index: '' + (i + 1),
        letter: letters[i]
      } as GematrixLetterIndex);
    }

    return lettersArray;
  }

  getCharArrayIndex(char: string, letters: GematrixLetterIndex[]): string {
    char = char.toUpperCase();

    var index = letters.find(c => c.letter === char)?.index;

    if (index) {
      return index;  // return as number
    }

    return '0';
  }

  getCharIndex(char: string): number {
    if (AlphabetConstants.EN_Letters.split('').find(l => l === char.toUpperCase())) {
      return +this.getCharArrayIndex(char, this.enLetters);
    } else if (AlphabetConstants.RU_Letters.split('').find(l => l === char.toUpperCase())) {
      return +this.getCharArrayIndex(char, this.ruLetters);
    }

    return 0;
  }

  getIndexReduction(index: string): number {
    var numbers = index.split('');
    let sum: number = 0;

    numbers.forEach(n => sum += +n);

    return sum;
  }
}
