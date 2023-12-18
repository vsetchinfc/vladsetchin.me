import { Injectable } from '@angular/core';
import { CipherType } from '../../common';
import { OrdinalCipherService } from './ordinal-cipher.service';

@Injectable({
  providedIn: 'root'
})
export class ReductionCipherService extends OrdinalCipherService {
  constructor() {
    super();
    this.cipherType = CipherType.Reduction;
  }

  override getCharIndex(char: string): number {
    let index: string = '' + super.getCharIndex(char);

    return this.getIndexReduction(index);
  }
}
