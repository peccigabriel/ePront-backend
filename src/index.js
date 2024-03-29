import express, { json } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const port = 3333;

app.use(json());
app.use (cors());
app.use(routes);

app.listen(port);

console.log(`server running is ${port}`)