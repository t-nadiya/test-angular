import { TestBed } from '@angular/core/testing';

import { ServicesModalService } from './services.modal.service';

describe('ServicesModalService', () => {
  let service: ServicesModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
