import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class doctor extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_doctor: {
      type: DataTypes.STRING(70),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'doctor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "doctor_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
