import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {

  isActive = 'html';

  code = {
    html: "html",
    ts: "ts",
    scss: 'scss'
  }

}