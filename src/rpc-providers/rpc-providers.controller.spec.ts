import { Test, TestingModule } from '@nestjs/testing';
import { RpcProvidersController } from './rpc-providers.controller';

describe('RpcProvidersController', () => {
  let controller: RpcProvidersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RpcProvidersController],
    }).compile();

    controller = module.get<RpcProvidersController>(RpcProvidersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
