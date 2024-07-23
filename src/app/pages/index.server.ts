// src/app/pages/index.server.ts
import prisma from '../../server/db';

export const load = async () => {
  const clients = await prisma.client.findMany();

  return {
    clients: clients,
  };
};
