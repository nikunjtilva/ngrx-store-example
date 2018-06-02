import { Fruit } from "./fruit";

describe('Fruit Model: ', () => {
    it('should create fruit model and calculate correct overallrating', () => {
        let fruit:Fruit = new Fruit({"name":"Kiwi","picture":"🥝","userRatings":[3,4,5],"overallRating":0})
        expect(fruit.name).toEqual("Kiwi");
        expect(fruit.overallRating).toEqual(4);
    });
});