import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class RandomizeService {

  constructor() { }

  getRandomRating(maxLimit:number,ratingMaxLimit:number):Observable<any>{
    
    const randomizer$ = Observable.of("")
    .switchMap(() => Observable
               .timer(this.getRandomDelay())
               .mapTo(this.getRandomNumber(maxLimit,ratingMaxLimit)))
    .repeat();
    return randomizer$;
  }
  private getRandomNumber(itemMaxLimit:number,ratingMaxLimit:number):{itemnumber,rating} {
    let randomRating = Math.floor(Math.random() * ratingMaxLimit) + 1;
    let randomNumber = Math.floor(Math.random() * itemMaxLimit) + 1;
    return {"itemnumber":randomNumber,"rating":randomRating};
  }

  private getRandomDelay() {
    return Math.random() * 1000;
  }
}
