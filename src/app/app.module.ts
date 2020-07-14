import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
// import {MediumListBlogsModule, MediumListBlogsComponent } from 'projects/medium-list-blogs/src/public-api';
import {MediumListBlogsModule, MediumListBlogsComponent} from 'medium-list-blogs';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    BrowserModule,
    MediumListBlogsModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const ngElement = createCustomElement(MediumListBlogsComponent, {
      injector: this.injector
    });
    customElements.define('medium-blog-list', ngElement);
  }
 }
