import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Vendor extends Model<Vendor> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.INTEGER,
    unique: true,

    allowNull: false,
  })
  odooid: number;
}
