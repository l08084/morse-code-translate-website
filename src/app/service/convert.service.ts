import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {
  constructor() {}

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
        default:
          code = '';
      }
      return code;
    });
  }
}
