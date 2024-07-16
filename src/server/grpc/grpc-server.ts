import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './generated/hero';
import { service } from './hero/hero.service';

const PROTO_PATH = 'src/server/grpc/proto/hero.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const heroProto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const server = new grpc.Server();

server.addService(heroProto.hero.HeroesService.service, service);

//TODO: Figure out if we can move some of these files around

export default server;
