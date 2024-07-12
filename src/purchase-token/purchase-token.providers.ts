import { PurchaseToken } from "./purchase-token.model";

export const purchaseTokenProviders = [
  {
    provide: 'PURCHASE_TOKEN_REPOSITORY',
    useValue: PurchaseToken
  }
]