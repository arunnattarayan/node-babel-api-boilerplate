import Developemnt from './development';
import Production from './production';
import dotenv from 'dotenv';

const ENV = process.env.NODE_ENV;
let instance = null;

class Environment {
  constructor () {
    if (!instance) {
      dotenv.config();
      let config;
      switch (ENV) {
        case 'production':
          config = Production;
          break;
        default:
          config = Developemnt;
      }
      this.configVal = config;
    }
  }

  get config () {
    return this.configVal;
  }
}

export default new Environment();
