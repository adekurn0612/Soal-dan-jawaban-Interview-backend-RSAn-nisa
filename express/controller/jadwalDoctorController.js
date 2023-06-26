import models, { sequelize } from "../models/init-models.js"



const findAllJadwalDoctormodels = async (req, res) => {
  try {
    const Data = await models.jadwal_doctor.findAll({
      include: [
        {
        model: models.doctor,
        as: "doctor",
        }
    ]
    });
    res.send( {message : 'berhasil',result:Data} );
  } catch (e) {
    res.json(e.message);
  }
};

const findAllJadwalDoctorQuery = async (req, res) => {
    try {
      const result = await sequelize.query(`
        SELECT jadwal_doctor.id,
          jadwal_doctor.doctor_id,
          jadwal_doctor.time_start,
          jadwal_doctor.time_finish,
          jadwal_doctor.status,
          jadwal_doctor.datee,
          jadwal_doctor.qouta,
          jadwal_doctor.day,
          doctor.nama_doctor
        FROM jadwal_doctor
        JOIN doctor ON jadwal_doctor.doctor_id = doctor.id
      `);
  
      res.send({ message: 'berhasil', result: result[0] });
    } catch (error) {
      console.error(error);
      res.send( error.message);
    }
  };


  import models, { sequelize } from "../models/init-models.js"



const PostJadwalDoctor = async (req, res) => {
  try {
    const Data = await models.jadwal_doctor.create({
      include: [
        {
        model: models.doctor,
        as: "doctor",
        }
    ]
    });
    res.send( {message : 'berhasil',result:Data} );
  } catch (e) {
    res.json(e.message);
  }
};

export default {
  findAllJadwalDoctormodels,
  findAllJadwalDoctorQuery,
};