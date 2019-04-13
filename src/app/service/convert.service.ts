import { Injectable } from '@angular/core';
import mapping from '../../assets/mapping.json';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {
  public morseMap: Map<string, string>;
  public japaneseMap: Map<string, string>;
  public englishMap: Map<string, string>;

  constructor() {
    this.morseMap = new Map<string, string>();
    this.createMorseMap();
  }

  /**
   *
   *
   * @param {string} [text=''] 入力フォームの文字列
   * @returns {string} 変換後の文字列
   * @memberof ConvertService
   */
  public convertToMorseCode(text = ''): string {
    const textList = text.trim().split('');
    const morseCodeList = this.mapping(textList);
    return morseCodeList.join('  ');
  }

  /**
   *
   *
   * @private
   * @param {string[]} textList 入力フォームの文字配列
   * @returns {string[]} 変換後の文字配列
   * @memberof ConvertService
   */
  private mapping(textList: string[]): string[] {
    return textList.map(text =>
      this.morseMap.has(text) ? this.morseMap.get(text) : ''
    );
  }

  /**
   * 日本語・アルファベットがキー、
   * モールス信号がバリューになるMapを作成する。
   *
   * @private
   * @memberof ConvertService
   */
  private createMorseMap(): void {
    // 日本語のモールス信号へのマッピング
    mapping.morseJp.forEach((code, index) => {
      this.morseMap.set(mapping.hiragana[index], code);
      this.morseMap.set(mapping.katakana[index], code);
    });

    // 英語のモールス信号へのマッピング
    mapping.morseEn.forEach((code, index) => {
      this.morseMap.set(mapping.uppercaseAlphabet[index], code);
      this.morseMap.set(mapping.lowercaseAlphabet[index], code);
    });

    // 数字のモールス信号へのマッピング
    mapping.morseNum.forEach((code, index) => {
      this.morseMap.set(mapping.numbers[index], code);
    });

    // 記号のモールス信号へのマッピング
    mapping.morseSymbol.forEach((code, index) => {
      this.morseMap.set(mapping.symbol[index], code);
    });
  }
}
