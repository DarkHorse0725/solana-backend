import { Module } from '@nestjs/common';
import { PurchaseTokenController } from './purchase-token.controller';
import { PurchaseTokenService } from './purchase-token.service';
import { purchaseTokenProviders } from './purchase-token.providers';

@Module({
  controllers: [PurchaseTokenController],
  providers: [PurchaseTokenService, ...purchaseTokenProviders],
  exports: [PurchaseTokenService]
})
export class PurchaseTokenModule {}
