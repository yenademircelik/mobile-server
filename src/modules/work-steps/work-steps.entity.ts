import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Work } from '../works/works.entity';

@Table
export class WorkSteps extends Model<WorkSteps> {
  @ForeignKey(() => Work)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  work_id: number;

  @BelongsTo(() => Work)
  work: Work;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  step_name: string;

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
}
