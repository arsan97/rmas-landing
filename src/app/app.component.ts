import { AfterViewInit, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rmas-landing';

  ngAfterViewInit(): void {
    let collection = document.getElementsByTagName('linearGradient');
    let data: any = [];
    Array.from(collection).forEach((element) => {
      let x = element.getAttribute('x2');
      let y = element.getAttribute('y2');
      data.push({ x: x, y: y });
    });
    console.log(data);
  }
}
