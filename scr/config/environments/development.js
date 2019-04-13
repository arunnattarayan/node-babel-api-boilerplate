import Config from './config';

class Development extends Config {
	constructor() {
		process.env['NODE_ENV'] = 'development';
		super();
	}

	devConfig() {
		return this.config
	}
}

export default new Development().devConfig();