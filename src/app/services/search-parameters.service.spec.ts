import { TestBed } from '@angular/core/testing';

import { SearchParametersService } from './search-parameters.service';

describe('SearchParametersService', () => {
  let service: SearchParametersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchParametersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
