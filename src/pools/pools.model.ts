import { Table, Column, Model, Unique, BelongsTo, DataType, PrimaryKey, ForeignKey, HasOne, HasMany, BelongsToMany} from 'sequelize-typescript';
import { Tag } from 'src/tags/tags.model';
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
  featuredImageVideoUrl: string;

  @Column
  announcementDate: Date;

  @Column({type: DataType.ENUM('draft', 'published', 'live', 'cancelled', 'emergency_cancelled', 'finished'), defaultValue: 'draft'})
  status: string;

  @Column({type: DataType.ENUM('default', 'appearing', 'purchasing', 'vesting', 'refunding'), defaultValue: 'default'})
  stage: string;

  @Column
  ended: boolean;

  @Column
  canJoin: boolean;
  
  @Column
  currency: string;

  @Column
  totalRaise: number;

  @Column
  projectFee: number;

  @Column
  mint: string;

  @Column({type: DataType.DOUBLE})
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

  @ForeignKey(() => Tag)
  @Column({type: DataType.ARRAY(DataType.UUID)})
  tagIds: string[];

  @HasMany(() => Tag, {foreignKey: 'id'})
  tags: Tag[];
}  