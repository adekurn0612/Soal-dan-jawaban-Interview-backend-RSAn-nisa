import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface jadwal_doctorAttributes {
  id?: number;
  doctor_id?: number;
  time_start?: string;
  time_finish?: string;
  qouta?: number;
  status?: boolean;
  datee?: string;
  day?: string;
}

@Table({ tableName: 'jadwal_doctor', schema: 'public', timestamps: false })
export class jadwal_doctor
  extends Model<jadwal_doctorAttributes, jadwal_doctorAttributes>
  implements jadwal_doctorAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('jadwal_doctor_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  doctor_id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  time_start?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  time_finish?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  qouta?: number;

  @Column({ allowNull: true, type: DataType.BOOLEAN })
  status?: boolean;

  @Column({ allowNull: true, type: DataType.STRING })
  datee?: string;

  @Column({ allowNull: true })
  day?: string;
}
