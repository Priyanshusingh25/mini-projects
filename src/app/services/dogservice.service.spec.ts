import { TestBed } from '@angular/core/testing';

import { DogserviceService } from './dogservice.service';

describe('DogserviceService', () => {
  let service: DogserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
