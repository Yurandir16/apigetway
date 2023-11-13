import { OderRepository } from "../../domain/repositories/oderRepository";
import { Oder } from "../../domain/entities/oder";
import { OderData} from "../../domain/repositories/oderRepository";
import { pool2 } from "../../../../database/postgresDb";
import { pool } from "../../../../database/mariaDb";

export class OderRepositoryr implements OderRepository {
    async createOder(oder:OderData ): Promise<Oder | null> {
        const client = await pool2.connect();
        let conn2;
        try {

            // Primero, verifica si el id_product existe en la tabla Product
            conn2 = await pool.getConnection();
            const queryCheck = "SELECT id FROM Product WHERE id_product = ?";
            const product = await conn2.query(queryCheck, [oder.id_product]);
            conn2.release();

            if (product.length === 0) {
                console.log("El id_product no existe en la tabla Product");
                return null;
            }
            console.log("Conexión exitosa a la BD");
            const query = "INSERT INTO Product (id, id_product, amount, price) VALUES ($1,$2,$3,$4)";
            const result = await client.query(query, [oder.id, oder.id_product, oder.amount, oder.price]);
            console.log(query);
            if (result.rowCount > 0) {
                return oder;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        } finally {
            if (conn2){
                conn2.release();
            }
            if (client) {
                client.release(); // Devuelve la conexión al pool al finalizar
            }
        }
    }

    async getOders(): Promise<Oder[] | null> {
        const client = await pool2.connect();
        try {   
            console.log("Conexión exitosa a la BD");
            const query = "SELECT * FROM Product ";
            const result = await client.query(query);
            console.log(query);
            if (result.rowCount> 0) {
                return result.rows;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        } finally {
            if (client) {
                client.release(); // Devuelve la conexión al pool al finalizar
            }
        }
    }
}
