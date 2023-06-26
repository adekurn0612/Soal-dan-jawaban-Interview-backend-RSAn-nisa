import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _doctor from  "./doctor.js";
import _jadwal_doctor from  "./jadwal_doctor.js";
import _user_admin from  "./user_admin.js";

import {Sequelize} from "sequelize";
const sequelize= new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      dialect:"postgres",
      pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:1000,
      },
    }

);
function initModels(sequelize) {
  const doctor = _doctor.init(sequelize, DataTypes);
  const jadwal_doctor = _jadwal_doctor.init(sequelize, DataTypes);
  const user_admin = _user_admin.init(sequelize, DataTypes);

  jadwal_doctor.belongsTo(doctor, { as: "doctor", foreignKey: "doctor_id"});
  doctor.hasMany(jadwal_doctor, { as: "jadwal_doctors", foreignKey: "doctor_id"});

  return {
    doctor,
    jadwal_doctor,
    user_admin,
  };
}

const models = initModels(sequelize)
export default models;
export  {sequelize};