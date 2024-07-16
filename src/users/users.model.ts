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

  @Column({type: DataType.ENUM('super_admin', 'editor', 'viewer'), defaultValue: 'viewer'})
  role: string;

  @Column
  telegram: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({type: DataType.ENUM('active', 'suspend', 'inactive'), defaultValue: 'active'})
  status: string;

  @Column
  twoFactorSecret: string;

  @Column({defaultValue: false})
  twoFactorEnabled: boolean;

  @HasMany(() => Pool)
  pools: Pool[];
}   