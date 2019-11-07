import * as express from 'express';

import * as ApplicationController from './controller/application';
import * as SecurityMiddleware from './middleware/security';

export const app = express();

init();

async function init() {
  try {
    SecurityMiddleware.init(app);
  } catch (error) {
    console.error('Middlewares init fail', error);
  }

  try {
    ApplicationController.init(app);
  } catch (error) {
    console.error('Controllers init fail', error);
  }

  app.listen(3000, function () {
    console.log('App listening on port 3000!')
  });
}
