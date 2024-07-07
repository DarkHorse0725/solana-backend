import { Table, Column, Model, Unique, BelongsTo, DataType, PrimaryKey, ForeignKey, HasOne, HasMany} from 'sequelize-typescript';
import { User } from 'src/users/users.model';


@Table
export class Pool extends Model {

  @PrimaryKey
  @Column({type:DataType.UUID, defaultValue: DataType.UUIDV4})
  id: string;

  @Unique
  @Column
  pubkey: string;

  @Column
  brand: string;

  @Column
  name: string;

  @Column
  slug: string;

  @Column
  shortBio: string;

  @Column
  description: string;

  @Column
  logoUrl : string;

  @Column
  mainImageUrl: string;

  @Column
  currency: string;

  @Column
  totalRaise: number;

  @Column
  projectFee: number;

  @Column
  mint: string;

  @Column
  price: number;

  @Column
  earlyPoolProportion: number;

  @Column
  openPoolProPortion: number;

  @Column
  earlyPoolFee: number;

  @Column
  openPoolFee: number;

  @Column
  earlyPoolStart: Date;

  @Column
  earlyPoolEnd: Date;

  @Column
  maxPurchaseForEarlyAccess: number;

  @Column
  openPoolStart: Date;

  @Column
  openPoolEnd: Date;

  @Column
  maxPurchaseForKYC: number;

  @Column
  maxPurchaseForNotKYC: number;

  @Column
  tgeDate: Date;

  @Column
  tgePercentage: number;

  @Column
  vestingCliff: number;

  @Column
  vestingFrequency: number;

  @Column
  numberOfVesting: number;

  @Column
  facebook: string;

  @Column
  twitter: string;

  @Column
  discord: string;

  @Column
  instagram: string;

  @Column
  telegram: string;

  @Column
  website: string;

  @Column
  medium: string;

  @ForeignKey(() => User)
  @Column({type: DataType.UUID})
  userId: string;

  @BelongsTo(() => User)
  user: User;
}  