import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { QaulityControl } from '../quality-control/quality-control.entity';

@Table
export class Images extends Model<Images> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image_url: string;

  @ForeignKey(() => QaulityControl)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quality_control_id: number;
  @BelongsTo(() => QaulityControl)
  qualityControl: QaulityControl;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  work_id: number;
}
