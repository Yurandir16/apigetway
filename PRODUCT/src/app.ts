import express from 'express';
import { Signale } from 'signale';
import { ProductRoute } from './Product-service/infrestructure/router/productRouter';

const app = express();
const signale = new Signale();

app.use(express.json());
app.use("/Api/v1/Product", ProductRoute);


app.listen(3001, () => {
    signale.success("Server online in port 3001");
});