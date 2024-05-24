import { Table, Column, Model, Unique, BelongsTo, DataType, PrimaryKey, ForeignKey, HasOne, HasMany} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

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
}   