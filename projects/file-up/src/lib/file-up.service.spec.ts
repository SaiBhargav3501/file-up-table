import { TestBed } from '@angular/core/testing';

import { FileUpService } from './file-up.service';

describe('FileUpService', () => {
  let service: FileUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
