import { TestBed } from '@angular/core/testing';

import { DropdownValidationService } from './dropdown-validation.service';

describe('DropdownValidationService', () => {
  let service: DropdownValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
