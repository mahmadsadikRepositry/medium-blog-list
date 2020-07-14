import { NgModule } from '@angular/core';
import { MediumListBlogsComponent } from './medium-list-blogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [MediumListBlogsComponent],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [MediumListBlogsComponent],
  entryComponents:[MediumListBlogsComponent]
})
export class MediumListBlogsModule { }
