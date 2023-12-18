import { Injectable } from '@angular/core';
import { Localise } from '../enums/localise.enum';

@Injectable({
  providedIn: 'root'
})
export class LocaliseService {
  // English Alphabet
  static EN_Letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // Russian Alphabet
  static RU_Letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

  constructor() { }

  static getCharLocalisation(char: string): Localise {
    if (LocaliseService.EN_Letters.split('').find(l => l === char.toUpperCase())) {
      return Localise.EN;
    } else if (LocaliseService.RU_Letters.split('').find(l => l === char.toUpperCase())) {
      return Localise.RU;
    }

    return Localise.None;
  }
}
