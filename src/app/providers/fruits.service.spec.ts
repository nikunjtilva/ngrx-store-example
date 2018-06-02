import { TestBed, inject } from '@angular/core/testing';

import { FruitsService } from './fruits.service';
import { HttpClient } from '@angular/common/http';

import SpyObj = jasmine.SpyObj;
import { fakeAsync,tick } from '@angular/core/testing';

describe('FruitsService', () => {
  let httpMock: SpyObj<HttpClient>;
  beforeEach(() => {
    httpMock = jasmine.createSpyObj('HttpClient',['get']);
    TestBed.configureTestingModule({
      providers: [FruitsService,{provide:HttpClient,useValue:httpMock}]
    });
  });

  it('should be created', inject([FruitsService], (service: FruitsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get list of fruits from fruits.json file on getFruits method call', inject([FruitsService], (service: FruitsService) => {
    service.getFruits()
    expect(httpMock.get).toHaveBeenCalledWith('./assets/data/fruits.json');
  }));

  it('should get fruit object with updated rating when rateFruit method called', inject([FruitsService], fakeAsync((service: FruitsService) => {
    let fruitToUpdate = {"name":"Orange","picture":"🍊","userRatings":[],"overallRating":0}
    let ratingToUpdate = 5;
    service.rateFruit(fruitToUpdate,ratingToUpdate).subscribe((updatedFruit)=>{
      expect(updatedFruit.userRatings).toEqual([5]);
    })
    tick();
  })));
});
