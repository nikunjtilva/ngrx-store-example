import { TestBed, inject, discardPeriodicTasks } from '@angular/core/testing';

import { RandomizeService } from './randomize.service';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';
import SpyObj = jasmine.SpyObj;
import { Observable } from 'rxjs/Observable';
describe('RandomizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomizeService]
    });
  });

  it('should be created', inject([RandomizeService], (service: RandomizeService) => {
    expect(service).toBeTruthy();
  }));
  it('should return random value and random rating on getRandomRating call', inject([RandomizeService],fakeAsync((service: RandomizeService) => {
    service.getRandomRating(10,5).subscribe((result)=>{
      expect(result.itemnumber).toBeLessThanOrEqual(10);
      expect(result.rating).toBeLessThanOrEqual(5)
    });
    tick(1000);
    discardPeriodicTasks();
  })));
});
