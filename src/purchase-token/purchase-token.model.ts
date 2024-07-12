import { Table, Column, Model, Unique, BelongsTo, DataType, PrimaryKey, ForeignKey, HasOne, HasMany} from 'sequelize-typescript';


@Table
export class PurchaseToken extends Model {
  @PrimaryKey
  @Column({type:DataType.UUID, defaultValue: DataType.UUIDV4})
  id: string;

  @Column
  mint: string;

  @Column
  decimals: number;

  @Column
  symbol: string;
}