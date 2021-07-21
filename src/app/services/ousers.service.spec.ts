import { TestBed } from '@angular/core/testing';

import { OUsersService } from './ousers.service';

describe('OUsersService', () => {
  let service: OUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
