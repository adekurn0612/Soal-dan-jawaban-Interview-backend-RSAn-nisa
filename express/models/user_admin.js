import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_admin extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    username: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userrole: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_admin',
    schema: 'public',
    timestamps: false
  });
  }
}
