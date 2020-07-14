import { TestBed } from '@angular/core/testing';

import { MediumListBlogsService } from './medium-list-blogs.service';

describe('MediumListBlogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediumListBlogsService = TestBed.get(MediumListBlogsService);
    expect(service).toBeTruthy();
  });
});
