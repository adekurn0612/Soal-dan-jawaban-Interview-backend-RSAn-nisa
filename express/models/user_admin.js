import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_admin extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: "user_admin_username_key"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userrole: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_admin',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_admin_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_admin_username_key",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
  }
}
