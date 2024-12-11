import { Seller } from "./SellerType";

export interface Product{
    id?: number;
    title: string;
    description: string;
    mrpPrice: number;
    sellingPrice: number;
    discountPercentage:number;
    quantity:number;
    colour:string;
    image: string[];
    numRatings?:number;
    category?:Category;
    seller?:Seller;
    createdAt?:Date;
    size:string;

}

interface Category{
    id?:number;
    name:string;
    categoryId:string;
    parentCategory?:Category;
    level:number;
}

