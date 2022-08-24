import { TestBed } from '@angular/core/testing';

import { CitylocateService } from './citylocate.service';

describe('CitylocateService', () => {
  let service: CitylocateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitylocateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
