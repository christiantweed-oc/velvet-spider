// src/app/pages/index.server.ts
import { PageServerLoad } from '@analogjs/router';
import prisma from '../../server/db';

export const load = async ({
  params, // params/queryParams from the request
  req, // H3 Request
  res, // H3 Response handler
  fetch, // internal fetch for direct API calls,
  event, // full request event
}: PageServerLoad) => {
  const clients = await prisma.client.findMany();

  return {
    clients: clients,
  };
};
