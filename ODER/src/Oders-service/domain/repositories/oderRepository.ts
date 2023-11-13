import {Oder } from "../entities/oder";

export interface OderRepository{
    createOder(oder:Oder): Promise<Oder|null>
    getOders():Promise<Oder[]|null>
}

export interface OderData{
    id: number,
    id_product:number,
    amount: number,
    price: number
}