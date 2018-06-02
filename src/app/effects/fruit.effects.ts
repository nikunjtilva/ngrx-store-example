import { Injectable } from '@angular/core';
import { FruitsService } from 'src/app/providers/fruits.service';
import { Effect,Actions } from "@ngrx/effects";
import * as fruitsActions from "../actions/fruit.actions";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class FruitEffects {

    constructor(private fruitsService:FruitsService,private actions$:Actions) { }    

    @Effect() loadFruits$ = this.actions$
                            .ofType(fruitsActions.LOAD_FRUITS)
                            .switchMap(()=>this.fruitsService.getFruits()
                            .map(fruits=>(new fruitsActions.LoadFruitsSuccessAction(fruits)))
                        )
    // tslint:disable-next-line:member-ordering
    @Effect() rateFruit$ = this.actions$
                            .ofType(fruitsActions.RATE_FRUIT)
                            .switchMap(action=>this.fruitsService.rateFruit((<any>action).payload.fruit,(<any>action).payload.rating)
                            .map(fruit=>(new fruitsActions.RateFruitSuccessAction(fruit)))
                        )

}