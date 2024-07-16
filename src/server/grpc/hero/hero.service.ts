import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { Hero } from '../generated/hero/Hero';
import { HeroById, HeroById__Output } from '../generated/hero/HeroById';
import { HeroesServiceHandlers } from '../generated/hero/HeroesService';

const findOne = (data: HeroById) => {
  const items = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];
  return items.find(({ id }) => id === data.id);
};

export const service: HeroesServiceHandlers = {
  FindOne: function (
    call: ServerUnaryCall<HeroById__Output, Hero>,
    callback: sendUnaryData<Hero>
  ): void {
    if (call.request) {
      console.log(`(server) Got client message: ${call.request.id}`);
    }
    callback(null, findOne(call.request));
  },
};
