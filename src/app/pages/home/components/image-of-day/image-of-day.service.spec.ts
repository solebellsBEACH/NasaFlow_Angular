import { TestBed } from '@angular/core/testing';

import { ImageOfDayService } from './image-of-day.service';

describe('ImageOfDayService', () => {
  let service: ImageOfDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageOfDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
