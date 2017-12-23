import { TestBed, inject } from '@angular/core/testing';

import { OldestPostService } from './oldest-post.service';

describe('OldestPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OldestPostService]
    });
  });

  it('should be created', inject([OldestPostService], (service: OldestPostService) => {
    expect(service).toBeTruthy();
  }));
});
