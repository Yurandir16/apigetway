import { CreateOderCase } from "../application/createOders";
import { OderRepositoryr } from "./repositories/oderRepositorys";
import { OderController } from "./controller/controllerProduct";
import { GetOderCase } from "../application/getOders";

const createOderRepository = new OderRepositoryr();

export const createOder = new CreateOderCase(createOderRepository);
export const getOder = new GetOderCase(createOderRepository)

export const OController = new OderController(createOder,getOder);