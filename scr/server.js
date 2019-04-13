import Environment from './config/environments';
import Express from './config/express-middleware';

let serverInstace = null;


export default new class Server extends Express {

  constructor() {
    super();
    const config = Environment.config;
    const port = config.PORT;
    if (!serverInstace) {
      this.app.listen(port, () => console.log(`Example app listening on port ${port}!`));
      serverInstace = 'serverInstace';
    }
  }

}
