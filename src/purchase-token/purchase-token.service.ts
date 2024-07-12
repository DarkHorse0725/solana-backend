import { Inject, Injectable } from '@nestjs/common';
import { PurchaseToken } from './purchase-token.model';
import { CreatePurchaseTokenDto } from './purchase-token.dto';

@Injectable()
export class PurchaseTokenService {
  constructor(
    @Inject('PURCHASE_TOKEN_REPOSITORY')
    private purchaseTokens: typeof PurchaseToken
  ){}

  createMany(data: CreatePurchaseTokenDto[]):Promise<PurchaseToken[]>{
    return this.purchaseTokens.bulkCreate(data);
  }

  findAll():Promise<PurchaseToken[]> {
    return this.purchaseTokens.findAll();
  }
}
