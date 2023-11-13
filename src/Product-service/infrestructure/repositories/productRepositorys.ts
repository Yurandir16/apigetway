import { ProductRepository } from "../../domain/repositories/productRepository";
import { Product } from "../../domain/entities/product";
import { ProductData } from "../../domain/repositories/productRepository";
import https from 'https';
import { pool } from "../../../database/mariaDb";

export class ProductRepositoryr implements ProductRepository {
    async createProducts(prod: ProductData): Promise<Product | null> {
        let conn;
        try {
            conn = await pool.getConnection();
            console.log("Conexión exitosa a la BD");
            const query = "INSERT INTO Product (id, nameProduct, category,stock, price) VALUES (?,?,?,?,?)";
            const result = await conn.query(query, [prod.id, prod.nameProduct, prod.category,prod.stock, prod.price]);
            console.log(query);
            if (result.affectedRows > 0) {
                return prod;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        } finally {
            if (conn) {
                conn.release(); // Devuelve la conexión al pool al finalizar
            }
        }
    }

    async getProducts(): Promise<Product[] | null> {
        let conn;
        try {   
            conn = await pool.getConnection();
            console.log("Conexión exitosa a la BD");
            const query = "SELECT * FROM Product ";
            const result = await conn.query(query);
            console.log(query);
            if (result.length > 0) {
                return result;
            } else {
                console.log("No se encontraron productos");
                return null;
          }
        } catch (error) {
            console.log(error);
            return null;
        } finally {
            if (conn) {
                conn.release(); // Devuelve la conexión al pool al finalizar
            }
        }
    }
}
