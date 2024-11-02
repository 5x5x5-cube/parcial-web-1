/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehiculeService } from './vehicule.service';

describe('Service: Vehicule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculeService]
    });
  });

  it('should ...', inject([VehiculeService], (service: VehiculeService) => {
    expect(service).toBeTruthy();
  }));
});
