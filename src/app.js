import { env } from './common/configs/env.js';
import { Server } from './server.js';
import MongoDB from './data/MongoDB.js';
import { AppRoutes } from './router/AppRoutes.js';
(async () => {
  main();
})();


async function main() {
  await MongoDB.connect();
  const server = new Server({
    port: env.PORT,
    routes: AppRoutes.getRoutes(),
  });

  server.start();
}
