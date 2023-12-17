import { Injectable } from '@angular/core';
import { CipherType } from '../../common';
import { ReverseCipherService } from './reverse-cipher.service';

@Injectable({
  providedIn: 'root'
})
export class ReverseReductionCipherService extends ReverseCipherService {
  constructor() {
    super();
    this.cipherType = CipherType.ReverseReduction;
  }

  override getCharIndex(char: string): number {
    var index: string = '' + super.getCharIndex(char);

    return this.getIndexReduction(index);
  }
}
