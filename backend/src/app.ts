require('dotenv').config();

import cors from 'cors';
import { NextFunction, Response } from 'express';
import { GraphQLServer, PubSub } from 'graphql-yoga';
import helmet from 'helmet';
import logger from 'morgan';
import { decodeJWT } from './lib';
import schema from './schema';


class App {
  public app: GraphQLServer;
  private pubSub: any;

  constructor() {
    this.pubSub = new PubSub();
    this.pubSub.ee.setMaxListeners(99);

    this.app = new GraphQLServer({
      schema,
      context: req => {
        const { connection: { context = null } = {} } = req;
        return {
          req: req.request,
          pubSub: this.pubSub,
          ...context
        }
      }
    });
    this.middlewares();
  }

  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger('dev'));
    this.app.express.use(helmet());
    this.app.express.use(this.jwt);
  };

  private jwt = (req, res: Response, next: NextFunction): void => {
    const token = req.get("X-JWT");
    if (token) {
      const user = decodeJWT(token);
      console.log(user);
      req.user = user;
    }
    next();
  }
}

export default new App().app;