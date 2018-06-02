import { Fruit } from "src/app/models/fruit";

export const LOAD_FRUITS = 'LOAD_FRUITS'
export const LOAD_FRUITS_SUCCESS = 'LOAD_FRUITS_SUCCESS'

export const RATE_FRUIT = 'RATE_FRUIT'
export const RATE_FRUIT_SUCCESS = 'RATE_FRUIT_SUCCESS'

export class LoadFruitsAction{
    readonly type = LOAD_FRUITS;
    constructor(){}
}

export class LoadFruitsSuccessAction{
    readonly type = LOAD_FRUITS_SUCCESS;
    constructor(public payload:Fruit[]){}
}

export class RateFruitAction{
    readonly type = RATE_FRUIT;
    constructor(public payload:{fruit:Fruit,rating:number}){}
}

export class RateFruitSuccessAction{
    readonly type = RATE_FRUIT_SUCCESS;
    constructor(public payload:Fruit){}
}

export class DefaultAction{
    readonly type = 'WHATEVER';
    constructor(){}
}

export type Action = LoadFruitsAction | LoadFruitsSuccessAction | RateFruitAction | RateFruitSuccessAction | DefaultAction;