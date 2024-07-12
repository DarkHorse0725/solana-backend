import { Module } from '@nestjs/common';
import { RpcProvidersController } from './rpc-providers.controller';
import { RpcProvidersService } from './rpc-providers.service';

@Module({
  controllers: [RpcProvidersController],
  providers: [RpcProvidersService]
})
export class RpcProvidersModule {}
