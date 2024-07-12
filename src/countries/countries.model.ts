import { Table, Column, Model, Unique, BelongsTo, DataType, PrimaryKey, ForeignKey, HasOne, HasMany} from 'sequelize-typescript';

@Table
export class Country extends Model {
  @PrimaryKey
  @Column({type:DataType.UUID, defaultValue: DataType.UUIDV4})
  id: string;

  @Column
  name: string;

  @Column
  alpha2: string;

  @Column
  countryCode: string;

  @Column
  iso31662: string;

  @Column
  region: string;

  @Column
  regionCode: string;

  @Column({defaultValue: false})
  restricted: boolean;
}