import { Injectable } from '@angular/core';
import mapping from '../../assets/mapping.json';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {
  public morseMap: Map<string, string>;

  constructor() {
    this.morseMap = new Map<string, string>();
    mapping.morse.forEach((code, index) => {
      this.morseMap.set(mapping.hiragana[index], code);
      this.morseMap.set(mapping.katakana[index], code);
    });
  }

  public convertToMorseCode(text = ''): string {
    const textList = text.trim().split('');
    const morseCodeList = this.mapping(textList);
    return morseCodeList.join('  ');
  }

  private mapping(textList: string[]): string[] {
    return textList.map(text =>
      this.morseMap.has(text) ? this.morseMap.get(text) : ''
    );
  }
}
