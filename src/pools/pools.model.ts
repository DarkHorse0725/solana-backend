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

  @ForeignKey(() => User)
  @Column({type: DataType.UUID})
  userId: string;

  @BelongsTo(() => User)
  user: User;
}  