import { Food } from "../animal-edit/food-list/food.model";

export class Animal {
    constructor(public specie: string, public family: string, public size: string, public population: number, public picture: string, public food: Food[]){}
}