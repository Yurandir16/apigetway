import {Product } from "../entities/product";

export interface ProductRepository{
    createProducts(product:Product): Promise<Product|null>
    getProducts():Promise<Product[]|null>
}

export interface ProductData{
    id:number,
    nameProduct:string,
    category:string,
    stock:number,
    price:number
}