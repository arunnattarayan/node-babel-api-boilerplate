import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import Logger from './logger';
import Route from './route/route.index';
import Routes from './route/routes';

const parser = Symbol('parser');
const logger = Symbol('logger');
const router = Symbol('router');
let ExpressInstance = null;

export default class Express {
  constructor () {
    if (!ExpressInstance) {
      this.exApp = express();
      this[parser]();
      this[logger]();
      this[router]();
      ExpressInstance = 'Express';
    }
  }

  [parser] () {
    this.exApp.use(cookieParser());
    this.exApp.use(bodyParser.urlencoded({ extended: true }));
    this.exApp.use(bodyParser.json());
  }

  [logger] () {
    this.exApp.use(Logger.loggerMiddlerware);
  }

  [router] () {
    const router = express.Router();
    Routes.every((route) => {
      router.use(Route.getUrl(route.url), route.route);
    });
    this.exApp.use(Route.fullPath(), router);
  }

  get app () {
    return this.exApp;
  }
}
