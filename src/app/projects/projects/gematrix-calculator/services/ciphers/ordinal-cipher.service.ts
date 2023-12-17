import { Injectable } from '@angular/core';
import { AlphabetConstants, CipherType } from '../../common';
import { CipherService } from './cipher.service';
import { GematrixLetterIndex } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class OrdinalCipherService extends CipherService {
  constructor() {
    super();
    this.cipherType = CipherType.Ordinal;

    this.enLetters = this.buildListOfLetters(AlphabetConstants.EN_Letters);
    this.ruLetters = this.buildListOfLetters(AlphabetConstants.RU_Letters);
  }
}
