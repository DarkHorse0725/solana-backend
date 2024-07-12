import { Table, Column, Model, Unique, BelongsTo, DataType, PrimaryKey, ForeignKey, HasOne, HasMany} from 'sequelize-typescript';


@Table
export class RpcProviders extends Model {
  @PrimaryKey
  @Column({type:DataType.UUID, defaultValue: DataType.UUIDV4})
  id: string;

  @Column({defaultValue: 'solana'})
  chain: string;

  @Column
  uri: string;

  @Column
  activated: boolean;
}