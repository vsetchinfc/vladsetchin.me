import { Injectable } from '@angular/core';
import { CipherType, LocaliseService } from '../../common';
import { CipherService } from './cipher.service';

@Injectable({
  providedIn: 'root'
})
export class OrdinalCipherService extends CipherService {
  constructor() {
    super();
    this.cipherType = CipherType.Ordinal;

    this.enLetters = this.buildListOfLetters(LocaliseService.EN_Letters);
    this.ruLetters = this.buildListOfLetters(LocaliseService.RU_Letters);
  }
}
