import { CarAdds } from "../shared/car-adds.model";
import { Subject } from "rxjs";


export class carAddsService{
    addsChanged = new Subject<CarAdds[]>();
    editedCarIndex = new Subject<number>();

    private carAdds: CarAdds[] = [
        new CarAdds("Extra set of wheels",
         1, "https://i.ebayimg.com/thumbs/images/g/43MAAOSwX1Za3ZTF/s-l225.jpg"),
        new CarAdds("Leather sit", 1, "https://5.imimg.com/data5/KR/WR/MY-37941853/leather-front-car-seat-covers-500x500.jpg")

    ];


    getAdds(){
        return this.carAdds.slice();
    }
    
    getSingleAdd(index: number){
        return this.carAdds[index];
    }

    addnewExtra(newExtra: CarAdds){
        this.carAdds.push(newExtra);
        this.addsChanged.next(this.carAdds.slice());
    }

    addExtraFeatures(carAdds: CarAdds[]){
      this.carAdds.push(...carAdds);
        this.addsChanged.next(this.carAdds.slice());
    }

    addUpdated(index: number, newAdd: CarAdds){
        this.carAdds[index] = newAdd;
        this.addsChanged.next(this.carAdds.slice());
    }

    deleteItem(index: number) {
        this.carAdds.splice(index,1);
        this.addsChanged.next(this.carAdds.slice());
    }

}