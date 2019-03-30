import { Injectable } from '@angular/core';
import mapping from '../../assets/mapping.json';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {
  public morseMap: Map<string, string>;

  constructor() {
    console.log(mapping.katakana);
    mapping.morse.forEach((code, index) => {
      this.morseMap.set(mapping.hiragana[index], code);
      this.morseMap.set(mapping.katakana[index], code);
    });
  }

  public convertToMorseCode(text = ''): string {
    const textList = text.trim().split('');
    const morseCodeList = this.mapping(textList);
    return morseCodeList.join('　');
  }

  private mapping(textList: string[]): string[] {
    return textList.map(text => {
      let code = '';
      switch (text) {
        case 'あ':
        case 'ア':
          code = '－－・－－';
          break;
        case 'い':
        case 'イ':
          code = '・－';
          break;
        case 'う':
        case 'ウ':
          code = '・・－';
          break;
        case 'え':
        case 'エ':
          code = '－・－－－';
          break;
        case 'お':
        case 'オ':
          code = '・－・・・';
          break;
        case 'か':
        case 'カ':
          code = '・－・・';
          break;
        default:
          code = '';
      }
      return code;
    });
  }
}
