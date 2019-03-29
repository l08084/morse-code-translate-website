import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ConvertService } from 'src/app/service/convert.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  public inputForm: FormGroup;
  public japaneseControl: FormControl;

  @Output() inputText = new EventEmitter<string>();

  constructor(
    private builder: FormBuilder,
    private convertService: ConvertService
  ) {
    // 入力フォームの初期設定を行う
    this.createForm();
  }

  public ngOnInit(): void {
    this.japaneseControl = this.inputForm.get('japanese') as FormControl;
  }

  private createForm() {
    this.inputForm = this.builder.group({
      japanese: ['', []]
    });

    this.convert();
  }

  private convert() {
    // 入力フォームの値が変更された場合、500ミリ秒間隔で値を取得する
    this.inputForm
      .get('japanese')
      .valueChanges.pipe(debounceTime(500))
      .subscribe(text => {
        this.inputText.emit(this.convertService.convertToMorseCode(text));
      });
  }
}
