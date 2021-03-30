import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-color',
  templateUrl: './range-color.component.html',
  styleUrls: ['./range-color.component.scss'],
})
export class RangeColorComponent implements OnInit {
  hue = 0;
  backgroundColor = `hsl(${this.hue}, 100%, 50%)`;
  rgbTranslation = [255, 0, 0];

  constructor() {}

  ngOnInit(): void {}
  
  onChange(e: Event) {
    this.hue = +(e.target as HTMLInputElement).value;
    this.backgroundColor = `hsl(${this.hue}, 100%, 50%)`;

    this.rgbTranslation = this.hslToRgb(this.hue/360, 1, .5);
    // console.log(this.hue);
  }

  hslToRgb(h: number, s: number, l: number) {
    let r, g, b;

    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      var hue2rgb = function hue2rgb(p: number, q: number, t: number) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }


}
