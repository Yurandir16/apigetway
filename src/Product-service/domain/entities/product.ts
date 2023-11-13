export class Product{
    constructor(
        readonly id: number,
        readonly nameProduct: string,
        readonly category: string,
        readonly stock: number,
        readonly price: number
    ){}
}