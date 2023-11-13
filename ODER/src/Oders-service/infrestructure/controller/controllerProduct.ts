import { Request, Response } from "express";
import { CreateOderCase } from "../../application/createOders";
import { GetOderCase } from "../../application/getOders";
import { OderData } from "../../domain/repositories/oderRepository";

export class OderController{
    constructor(
        readonly createOderUseCase:CreateOderCase,
        readonly getOderUseCase:GetOderCase
    ){}
    async createOders(req: Request, res: Response) {
        const data: OderData={
            id:req.body.id,
            id_product: req.body.id_product,
            amount: req.body.amount,
            price: req.body.price
        }
        try {
            const oder = await this.createOderUseCase.run(data);
            if (oder!==null){
                res.status(200).send({
                    status:"Success",
                    data:oder
                });
            }else{
                res.status(404).send('No se pudo crear el oder')
            }
           
        } catch (error) {
            res.status(500).send({
                status: "error",
                data: "Ocurrio un error",
                message: error,
            });
        }
    }
    async getOders(req:Request, res:Response){
        
        try{
            const oder = await this.getOderUseCase.run();
            if(oder!==null){
                res.status(200).send({
                    status:"Success",
                    data:oder
                });
            }else{
                res.status(404).send('No se pudo obtener los oders')
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
