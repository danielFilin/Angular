import { CarAdds } from "./car-adds.model";

export class Car {
    public brand: string;
    public hp: number;
    public price: number;
    public picture: string;
    public adds: CarAdds[];

    constructor(brand: string, hp: number, price: number, picture: string, adds: CarAdds[]){
        this.brand = brand;
        this.hp = hp;
        this.price = price;
        this.picture = picture;
        this.adds = adds;

}
}

