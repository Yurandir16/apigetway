import express from 'express';
import { Signale } from 'signale';
import { ProductRoute } from './Product-service/infrestructure/router/productRouter';
import { OderRoute } from './Oders-service/infrestructure/router/oderRouter';

const app = express();
const signale = new Signale();

app.use(express.json());
app.use("/Api/v1/Product", ProductRoute);
app.use("/Api/v1/Oder",OderRoute);

app.listen(3000, () => {
    signale.success("Server online in port 3000");
});