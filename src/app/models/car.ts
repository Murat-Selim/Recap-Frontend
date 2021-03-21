import { CarImage } from "./carimage";

export interface Car{
    carId:number;
    brandId:number;
    colorId:number;
    modelYear:string;
    dailyPrice:number;
    brandName:string;
    colorName:string;
    description:string;
    carName:string;
    imagePath:string;
}