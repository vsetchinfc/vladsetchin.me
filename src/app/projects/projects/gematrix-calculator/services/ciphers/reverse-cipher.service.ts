import { Injectable } from '@angular/core';
import { CipherType, LocaliseService } from '../../common';
import { CipherService } from './cipher.service';

@Injectable({
  providedIn: 'root'
})
export class ReverseCipherService extends CipherService {
  constructor() {
    super();
    this.cipherType = CipherType.Reverse;

    let enLettersReverseOrder = LocaliseService.EN_Letters.split('').reverse().join('');
    this.enLetters = this.buildListOfLetters(enLettersReverseOrder);

    let ruLettersReverseOrder = LocaliseService.RU_Letters.split('').reverse().join('');
    this.ruLetters = this.buildListOfLetters(ruLettersReverseOrder);
  }
}
