import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumListBlogsComponent } from './medium-list-blogs.component';

describe('MediumListBlogsComponent', () => {
  let component: MediumListBlogsComponent;
  let fixture: ComponentFixture<MediumListBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumListBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumListBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
