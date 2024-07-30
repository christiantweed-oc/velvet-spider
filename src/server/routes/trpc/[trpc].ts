import { createTrpcNitroHandler } from '@analogjs/trpc';

import { appRouter } from '../../trpc/routers';
import { createContext } from '../../trpc/context';

// export API handler
export default createTrpcNitroHandler({
  router: appRouter,
  createContext,
});
