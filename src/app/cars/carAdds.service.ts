import { CarAdds } from "../shared/car-adds.model";
import { EventEmitter } from "@angular/core";


export class carAddsService{
    addsChanged = new EventEmitter<CarAdds[]>();


    private carAdds: CarAdds[] = [
        new CarAdds("Extra set of wheels",
         1, "https://i.ebayimg.com/thumbs/images/g/43MAAOSwX1Za3ZTF/s-l225.jpg"),
        new CarAdds("Leather sit", 1, "https://5.imimg.com/data5/KR/WR/MY-37941853/leather-front-car-seat-covers-500x500.jpg")

    ];


    getAdds(){
        return this.carAdds.slice();
    }

    addnewExtra(carAdds: CarAdds){
        this.carAdds.push(carAdds);
        this.addsChanged.emit(this.carAdds.slice());
    }

    addExtraFeatures(carAdds: CarAdds[]){
      this.carAdds.push(...carAdds);
        this.addsChanged.emit(this.carAdds.slice());
    }

}