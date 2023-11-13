import { OderRepository  } from "../domain/repositories/oderRepository";

export class GetOderCase {
    constructor(readonly OderRepo: OderRepository){}
    async run(){
        const oder = await this.OderRepo.getOders();
        if(!oder){
            throw new Error("ALGO SALIO MAL CON ODERS")
        }
        return oder;
    }
}    