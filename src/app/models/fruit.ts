export interface IFruit {
    name: string;
    picture: string;
    userRatings: number[];
    overallRating:number;
}

export class Fruit implements IFruit {
    name: string;
    picture: string;
    userRatings: number[]
    overallRating:number;
    constructor(jsonObj) {
        for (let prop in jsonObj) {
            this[prop] = jsonObj[prop];
        }
        this.overallRating = this.userRatings.length > 0 ? Math.round((this.userRatings.reduce((accumulator, value) => { return accumulator + value }) / this.userRatings.length)) : 0;
    }
}
