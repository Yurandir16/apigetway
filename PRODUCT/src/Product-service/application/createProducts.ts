import {ProductRepository,ProductData} from "../domain/repositories/productRepository";

export class CreateProductCase {
    constructor(readonly ProductRepo: ProductRepository){}
    async run(pro:ProductData){
        const product = await this.ProductRepo.createProducts(pro);
        if(!product){
            throw new Error("ALGO SALIO MAL CON PRODUCT")
        }
        return product;
    }
}    