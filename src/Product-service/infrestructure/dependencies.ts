import { CreateProductCase } from "../application/createProducts";
import { ProductRepositoryr } from "./repositories/productRepositorys";
import { PayController } from "./controller/controllerProduct";
import { GetProductCase } from "../application/getProducts";

const createProductRepository = new ProductRepositoryr();

export const createPro = new CreateProductCase(createProductRepository);
export const getPro = new GetProductCase(createProductRepository)

export const PController = new PayController(createPro,getPro);