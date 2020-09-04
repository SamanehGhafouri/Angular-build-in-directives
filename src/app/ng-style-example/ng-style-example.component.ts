import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent implements OnInit {
  color: string;
  fontSize: number;
  style: {
    'background-color': string,
    'border-radius': string,
    border?: string,
    width?: string,
    height?: string
  };

  constructor() { }

  ngOnInit() {
    this.fontSize = 16;
    this.color = 'purple';
    this.style = {
      'background-color': '#cccccc',
      'border-radius': '10px',
      'height': '70px',
      'width': '30px'
    };
  }
  apply(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
  }

}
