import { ProductRepository  } from "../domain/repositories/productRepository";

export class GetProductCase {
    constructor(readonly ProductRepo: ProductRepository){}
    async run(){
        const product = await this.ProductRepo.getProducts();
        if(!product){
            throw new Error("ALGO SALIO MAL CON PRODUCTS")
        }
        return product;
    }
}    