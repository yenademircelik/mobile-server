import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { WorkSteps } from '../work-steps/work-steps.entity';
// import { WorkProducts } from '../work-products/work-products.entity';

@Table
export class Work extends Model<Work> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  order_number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  project_number: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  vendor_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quality_responsible_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  inspector_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  foreman_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  work_type: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  creator_name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order_id: number;

  @HasMany(() => WorkSteps)
  workStep: WorkSteps[];

  //   @HasMany(() => WorkProducts)
  //   workProducts: WorkProducts[];
}
