import { Test, TestingModule } from '@nestjs/testing';
import { RpcProvidersService } from './rpc-providers.service';

describe('RpcProvidersService', () => {
  let service: RpcProvidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RpcProvidersService],
    }).compile();

    service = module.get<RpcProvidersService>(RpcProvidersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
