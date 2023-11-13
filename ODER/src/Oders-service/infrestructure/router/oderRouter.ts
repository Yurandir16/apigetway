import express from "express";
import { OController } from "../dependencies";
export const OderRoute = express.Router();

OderRoute.post("/create-oder",OController.createOders.bind(OController));
OderRoute.get("/view-oder",OController.getOders.bind(OController));

