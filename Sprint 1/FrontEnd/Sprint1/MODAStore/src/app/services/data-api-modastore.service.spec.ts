import { TestBed } from '@angular/core/testing';

import { DataApiMODASTOREService } from './data-api-modastore.service';

describe('DataApiMODASTOREService', () => {
  let service: DataApiMODASTOREService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataApiMODASTOREService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
