import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/providers/fruits.service';
import { Fruit } from 'src/app/models/fruit';
import { Store,State } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state';
import { Observable } from 'rxjs/Observable';
import * as fruitsActions from "./actions/fruit.actions"
import { RandomizeService } from 'src/app/randomize.service';
import 'rxjs/add/operator/filter'
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  fruits$ : Observable<any>;
   randomRatingSubscription:Subscription;
   randomRatingToggle:boolean
  constructor(private store:Store<AppState>,private randomize:RandomizeService,private state:State<AppState>){
    this.randomRatingToggle = false;
  }

  ngOnInit(){
    this.fruits$ = this.store.select((state)=> state.fruits.map(fruitItem=> new Fruit(fruitItem)));        
    this.loadFruits();
  }

  loadFruits(){
    this.store.dispatch(new fruitsActions.LoadFruitsAction());
  }

  rateFruit(rating ,fruit:Fruit){
    this.store.dispatch(new fruitsActions.RateFruitAction({fruit:fruit,rating:rating}));
  }

  randomizeRatings(toggle){
    this.randomRatingToggle = toggle;
    if(!this.randomRatingSubscription)
    this.randomRatingSubscription =  this.randomize.getRandomRating(10,5).filter(()=>this.randomRatingToggle).subscribe((randomData)=>{
        let randomFruit = this.state.value.fruits[randomData.itemnumber];
        this.store.dispatch(new fruitsActions.RateFruitAction({fruit:randomFruit,rating:randomData.rating}));
    })
  }
}

