import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface doctorAttributes {
  id?: number;
  nama_doctor?: string;
}

@Table({ tableName: 'doctor', schema: 'public', timestamps: false })
export class doctor
  extends Model<doctorAttributes, doctorAttributes>
  implements doctorAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('doctor_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(70) })
  nama_doctor?: string;
}
