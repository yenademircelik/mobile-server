import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Work } from '../works/works.entity';
import { Products } from '../products/products.entity';

@Table
export class WorkProducts extends Model<WorkProducts> {
  @ForeignKey(() => Work)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  work_id: number;
  @BelongsTo(() => Work)
  work: Work;

  @ForeignKey(() => Products)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id: number;
  @BelongsTo(() => Products)
  product: Products;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;
}
