import {OderRepository,OderData} from "../domain/repositories/oderRepository";

export class CreateOderCase {
    constructor(readonly ProductRepo: OderRepository){}
    async run(oders:OderData){
        const oder = await this.ProductRepo.createOder(oders);
        if(!oder){
            throw new Error("ALGO SALIO MAL CON ODERS")
        }
        return oder;
    }
}    