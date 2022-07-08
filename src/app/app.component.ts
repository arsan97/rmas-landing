import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rmas-landing';
  svgImage: any;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  getCoordinates(xml: any) {
    const elements = xml.getElementsByTagName('linearGradient');
    let data: any = [];
    Array.from(elements).forEach((element: any) => {
      let x = element.getAttribute('x2');
      let y = element.getAttribute('y2');
      data.push({ x: x, y: y });
    });
    console.log(data);
  }

  ngOnInit(): void {
    this.httpClient
      .get(`assets/images/Map_with_locationpointer_lines.svg`, {
        responseType: 'text',
      })
      .subscribe((value) => {
        this.svgImage = this.sanitizer.bypassSecurityTrustHtml(value);
        let parser = new DOMParser();
        let xml = parser.parseFromString(value, 'text/xml');
        this.getCoordinates(xml);
      });
  }
}
