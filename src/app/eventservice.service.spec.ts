/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventserviceService } from './eventservice.service';

describe('Service: Eventservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventserviceService]
    });
  });

  it('should ...', inject([EventserviceService], (service: EventserviceService) => {
    expect(service).toBeTruthy();
  }));
});
