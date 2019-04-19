let configInstace = null;

export default class Config {
  constructor () {
    if (!configInstace) {
      this.config = process.env;
      configInstace = 'ConfigInstace';
    }
  }

  set config (env) {
    this.PORT = env.PORT || '3000';
    this.API_ROOT_PATH = env.PORT || 'api';
    this.DB_URL = env.DB_URL || '';
  }

  get config () {
    return this;
  }
}
