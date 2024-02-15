import { TestBed} from '@angular/core/testing';
import { PlanetaryService } from './planetary.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiHandleService } from './api-handle.service';

describe('PlanetaryService', () => {
  let service: PlanetaryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlanetaryService, ApiHandleService], // Provide both services
    });
    service = TestBed.inject(PlanetaryService);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(PlanetaryService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
