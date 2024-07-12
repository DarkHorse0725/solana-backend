import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseTokenController } from './purchase-token.controller';

describe('PurchaseTokenController', () => {
  let controller: PurchaseTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseTokenController],
    }).compile();

    controller = module.get<PurchaseTokenController>(PurchaseTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
