import { TestBed } from '@angular/core/testing';

import { ProfilesRequestService } from './profile-request.service';

describe('ProfileRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilesRequestService = TestBed.get(ProfilesRequestService);
    expect(service).toBeTruthy();
  });
});
