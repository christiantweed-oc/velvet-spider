import { ServerCredentials } from '@grpc/grpc-js';

import server from '../grpc/grpc-server';

export default defineNitroPlugin((nitroApp) => {
  server.bindAsync(
    '0.0.0.0:6969',
    ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        console.error(`Server error: ${err.message}`);
      } else {
        console.log(`Server bound on port: ${port}`);
      }
    }
  );
  nitroApp.hooks.hookOnce('close', () =>
    server.tryShutdown((err) => {
      if (err) {
        console.error(err);
      }
    })
  );
});
