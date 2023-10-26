import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { WorkProducts } from '../work-products/work-products.entity';

@Table
export class Products extends Model<Products> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  odooId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  customer: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customerId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  technicalDrawingUrl: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  guideUrl: string;

  @HasMany(() => WorkProducts)
  workProducts: WorkProducts[];
}
