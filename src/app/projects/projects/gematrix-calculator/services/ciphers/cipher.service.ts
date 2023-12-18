import { Injectable } from '@angular/core';
import { GematrixLetterIndex } from '../../models';
import { CipherType } from '../../common';
import { LocaliseService } from '../../common/services/localise.service';
import { Localise } from '../../common/enums/localise.enum';

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
    let index = 0;

    switch (LocaliseService.getCharLocalisation(char)) {
      case Localise.EN:
        index = +this.getCharArrayIndex(char, this.enLetters);
        break;
      case Localise.RU:
        index = +this.getCharArrayIndex(char, this.ruLetters);
        break;
      case Localise.None:
        index = 0;
        break;
    }

    return index;
  }

  getIndexReduction(index: string): number {
    var numbers = index.split('');
    let sum: number = 0;

    numbers.forEach(n => sum += +n);

    return sum;
  }
}
