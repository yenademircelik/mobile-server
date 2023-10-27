import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class QaulityControl extends Model<QaulityControl> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  technical_drawing_numbering: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tools: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  actual_dimension: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lower_tolerance: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  upper_tolerance: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  example_visual_url: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  step_name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  form_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  measured_value_1: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  measured_value_2: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  measured_value_3: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  image_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  substep_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  work_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sample_quantity: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  row_number: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  issue: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  issue_text: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  issue_description: string;
}
