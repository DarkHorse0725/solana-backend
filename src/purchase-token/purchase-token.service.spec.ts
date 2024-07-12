import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseTokenService } from './purchase-token.service';

describe('PurchaseTokenService', () => {
  let service: PurchaseTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseTokenService],
    }).compile();

    service = module.get<PurchaseTokenService>(PurchaseTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
