import express from 'express';
import { Signale } from 'signale';
import { OderRoute } from './Oders-service/infrestructure/router/oderRouter';

const app = express();
const signale = new Signale();

app.use(express.json());
app.use("/Api/v1/Oder",OderRoute);

app.listen(3002, () => {
    signale.success("Server online in port 3002");
});