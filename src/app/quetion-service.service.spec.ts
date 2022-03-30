import { TestBed } from '@angular/core/testing';

import { QuetionServiceService } from './quetion-service.service';

describe('QuetionServiceService', () => {
  let service: QuetionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuetionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
