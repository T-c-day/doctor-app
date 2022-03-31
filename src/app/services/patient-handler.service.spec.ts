import { TestBed } from '@angular/core/testing';

import { PatientHandlerService } from './patient-handler.service';

describe('PatientHandlerService', () => {
  let service: PatientHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
