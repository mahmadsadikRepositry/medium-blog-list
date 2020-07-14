import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-medium-list-blogs',
  template: `
    <p id="custom">
      medium-list-blogs works!
    </p>
  `,
  styles: [],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class MediumListBlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
