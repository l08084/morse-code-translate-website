import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public setText = '';

  onInput(text: string) {
    this.setText = text;
  }

  onSendConvertType(type: string) {
    console.log(type);
  }
}
