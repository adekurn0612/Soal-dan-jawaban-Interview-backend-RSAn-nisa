import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface user_adminAttributes {
  id?: number;
  username?: string;
  password?: string;
  userrole?: string;
}

@Table({ tableName: 'user_admin', schema: 'public', timestamps: false })
export class user_admin
  extends Model<user_adminAttributes, user_adminAttributes>
  implements user_adminAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('user_admin_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(25) })
  username?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  password?: string;

  @Column({ allowNull: true, type: DataType.STRING(10) })
  userrole?: string;
}
