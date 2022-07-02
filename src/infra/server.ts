import 'reflect-metadata';
// import './containers/registry';
import 'regenerator-runtime/runtime.js';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}!`);
});
