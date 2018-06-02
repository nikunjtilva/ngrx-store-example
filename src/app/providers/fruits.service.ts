import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { Fruit } from 'src/app/models/fruit';
@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private http:HttpClient) { }

  getFruits():Observable<any>{
    return this.http.get('./assets/data/fruits.json');
  }
  
  rateFruit(fruit:Fruit,rating:number):Observable<Fruit>{
    return new Observable(observer =>{ //mocking server call by creating new fruit object assuming that it is returned from server
      let updatedFruit = new Fruit({"name":fruit.name,"picture":fruit.picture,"userRatings":[...fruit.userRatings,rating],"overallRating":0})
      observer.next(updatedFruit);
    })
  }
}
