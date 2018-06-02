import { fruitReducer } from "./fruits.reducer";
import { LoadFruitsSuccessAction, RateFruitSuccessAction,DefaultAction } from "../actions/fruit.actions";
describe('Fruit Reducer: ', () => {

    it('should return list of fruits on LOAD_FRUIT_SUCCESS', () => {
        let fruitList = [
            { "name": "Banana", "picture": "🍌", "userRatings": [], "overallRating": 0 },
            { "name": "Peach", "picture": "🍑", "userRatings": [], "overallRating": 0 }
        ]
        let result = fruitReducer([], new LoadFruitsSuccessAction(fruitList));
        expect(result).toEqual(fruitList);
    });

    it('should update rate and return updated list',()=>{
        let fruitList = [
            { "name": "Banana", "picture": "🍌", "userRatings": [], "overallRating": 0 },
            { "name": "Peach", "picture": "🍑", "userRatings": [], "overallRating": 0 },
            {"name":"Watermelon","picture":"🍉","userRatings":[],"overallRating":0},
            {"name":"Green Apple","picture":"🍏","userRatings":[],"overallRating":0}
        ]
        let updatedFruitFromService = { "name": "Peach", "picture": "🍑", "userRatings": [4], "overallRating": 0 }
        let updatedResult = fruitReducer(fruitList,new RateFruitSuccessAction(updatedFruitFromService));

        let expectedFruitList = [
            { "name": "Banana", "picture": "🍌", "userRatings": [], "overallRating": 0 },
            { "name": "Peach", "picture": "🍑", "userRatings": [4], "overallRating": 0 },
            {"name":"Watermelon","picture":"🍉","userRatings":[],"overallRating":0},
            {"name":"Green Apple","picture":"🍏","userRatings":[],"overallRating":0}
        ]
        expect(updatedResult).toEqual(expectedFruitList);
    });

    it('should return current state if action is not handled by reducer', () => {
        let fruitList = [
            { "name": "Banana", "picture": "🍌", "userRatings": [], "overallRating": 0 },
            { "name": "Peach", "picture": "🍑", "userRatings": [], "overallRating": 0 }
        ]
        let result = fruitReducer(fruitList, new DefaultAction());
        expect(result).toEqual(fruitList);
    });
});

