import { Table, Column, Model, Unique, BelongsTo, DataType, PrimaryKey, ForeignKey, HasOne, HasMany} from 'sequelize-typescript';


@Table
export class Tag extends Model {
  @PrimaryKey
  @Column({type:DataType.UUID, defaultValue: DataType.UUIDV4})
  id: string;

  @Column
  name: string;

  @Column
  foreColor: string;

  @Column
  bgColor: string;
}