import { Request, Response } from "express";
import { CreateProductCase } from "../../application/createProducts";
import { GetProductCase } from "../../application/getProducts";
import { ProductData } from "../../domain/repositories/productRepository";

export class PayController{
    constructor(
        readonly createProductUseCase:CreateProductCase,
        readonly getProductUseCase:GetProductCase
    ){}
    async createProduct(req: Request, res: Response) {
        const data: ProductData={
            id:req.body.id,
            nameProduct: req.body.nameProduct,
            category: req.body.category,
            stock:req.body.stock,
            price: req.body.price
        }
        try {
            const productR = await this.createProductUseCase.run(data);
            if (productR!==null){
                res.status(200).send({
                    status:"Success",
                    data:productR
                });
            }else{
                res.status(404).send('No se pudo crear el producto')
            }
           
        } catch (error) {
            res.status(500).send({
                status: "error",
                data: "Ocurrio un error",
                message: error,
            });
        }
    }
    async getProduct(req:Request, res:Response){
        
        try{
            const productR = await this.getProductUseCase.run();
            if(productR!==null){
                res.status(200).send({
                    status:"Success",
                    data:productR
                });
            }else{
                res.status(404).send('No se pudo obtener los productos')
            }
        }catch(error){
            res.status(500).send({
                status:"error",
                data:"Ocurrio un error",
                message:error,
            });
        }
    }
}
