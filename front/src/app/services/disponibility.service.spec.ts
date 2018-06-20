import { TestBed, inject } from '@angular/core/testing';

import { DisponibilityService } from './disponibility.service';

describe('DisponibilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisponibilityService]
    });
  });

  it('should be created', inject([DisponibilityService], (service: DisponibilityService) => {
    expect(service).toBeTruthy();
  }));
});
