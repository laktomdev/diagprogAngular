import { TestBed } from '@angular/core/testing';

import { LockService } from './lock-service.service';

describe('LockServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LockService = TestBed.get(LockService);
    expect(service).toBeTruthy();
  });
});
