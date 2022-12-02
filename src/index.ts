import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import db from './config/mongo';
import { routerApi } from './routes';
import { errorHandler } from './middlewares/error.handler';
import { corsOptions } from './config/cors';

const PORT = process.env.PORT || 3000;
const app = express();

/* Para endpoints-logs */
app.use(morgan('combined'));
app.use(express.json());

routerApi(app);

/* Middlewares */
app.use(cors(corsOptions));

app.use(errorHandler);

db().then(() => console.log('DB conexion Ready'));

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
