import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class jadwal_doctor extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'doctor',
        key: 'id'
      }
    },
    time_start: {
      type: DataTypes.TIME,
      allowNull: true
    },
    time_finish: {
      type: DataTypes.TIME,
      allowNull: true
    },
    qouta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    datee: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_DATE')
    },
    day: {
      type: DataTypes.ENUM("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jadwal_doctor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jadwal_doctor_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
