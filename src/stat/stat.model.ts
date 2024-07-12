import { Table, Column, Model, Unique, BelongsTo, DataType, PrimaryKey, ForeignKey, HasOne, HasMany} from 'sequelize-typescript';

@Table
export class Stat extends Model {
  @PrimaryKey
  @Column({type:DataType.UUID, defaultValue: DataType.UUIDV4})
  id: string;

  @Column
  captialRaised: string;

  @Column
  projectsLaunched: string;

  @Column
  avgProjectATH: string;

  @Column
  communityMembers: string;
}