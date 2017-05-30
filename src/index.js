/* eslint-disable no-console */

import express from 'express';
import constants from './config/constants';
import './config/database';
import middlewareConfig from './config/middlewares';
import apiRoutes from './modules';

console.log(constants);

const app = express();

middlewareConfig(app);

app.get('/', (req, res) => {
  res.send('Hello world');
});

apiRoutes(app);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
            server is running on port:${constants.PORT}
            ---
            Running on ${process.env.NODE_ENV}
        `);
  }
});
