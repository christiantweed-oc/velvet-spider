import grpc, { Metadata, ServiceClientConstructor } from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import { Observable } from 'rxjs';

const PROTO_PATH = './proto/hero.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const heroProto = grpc.loadPackageDefinition(packageDefinition);

export namespace hero {
  export interface HeroesService {
    findOne(
      data: HeroById,
      metadata?: Metadata,
      ...rest: any[]
    ): Observable<Hero>;
  }
  export interface HeroById {
    id?: number;
  }
  export interface Hero {
    id?: number;
    name?: string;
  }
}

const findOne = (data: hero.HeroById) => {
  const items = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];
  return items.find(({ id }) => id === data.id);
};

const server = new grpc.Server();

// server.addService((heroProto['HeroesService'] as ServiceClientConstructor).service, ())
