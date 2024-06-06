import { Table, Column, Model, Unique, BelongsTo, DataType, PrimaryKey, ForeignKey, HasOne, HasMany} from 'sequelize-typescript';
import { databaseProviders } from 'src/database/database.providers';
import { Pool } from 'src/pools/pools.model';


@Table
export class User extends Model {

  @PrimaryKey
  @Column({type:DataType.UUID, defaultValue: DataType.UUIDV4})
  id: string;

  @Unique
  @Column
  email: string;

  @Column
  password: string;

  @Column({type: DataType.ARRAY(DataType.STRING), defaultValue: []})
  wallets: string[];

  @Column
  telegram: string;

  @Column({type: DataType.ARRAY(DataType.JSON)})
  socials: object[];

  @HasMany(() => Pool)
  pools: Pool[]
}   