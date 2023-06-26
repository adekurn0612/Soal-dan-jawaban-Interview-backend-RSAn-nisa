import models, { sequelize } from "../models/init-models.js"
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import weekday from 'dayjs/plugin/weekday.js';

dayjs.extend(customParseFormat);
dayjs.extend(weekday);


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





  const PostJadwalDoctor = async (req, res) => {
    try {
      const { name, doctor_id, day, startDate, endDate, time_start, time_finish, qouta, status } = req.body;
  
      const startDateObj = dayjs(startDate, 'YYYY-MM-DD');
      const endDateObj = dayjs(endDate, 'YYYY-MM-DD');
  
      const mondays = [];
      console.log(startDate, endDate);
      let currentDate = startDateObj;
      while (currentDate.isBefore(endDateObj) || currentDate.isSame(endDateObj, 'day')) {
        if (currentDate.day() === 1) { // Senin memiliki indeks 1 pada plugin 'weekday'
          mondays.push(currentDate.format('YYYY-MM-DD'));
        }
        currentDate = currentDate.add(1, 'day');
      }
  
      const output = [];
      for (const date of mondays) {
        const Data = await models.jadwal_doctor.create({
          name,
          day,
          datee :date,
          doctor_id,
          time_start,
          time_finish,
          qouta,
          status,
        });
        output.push(Data);
      }
  
      res.send({ message: 'berhasil', result: output });
    } catch (e) {
      res.json(e.message);
    }
  };
  
  
  

export default {
  findAllJadwalDoctormodels,
  findAllJadwalDoctorQuery,
  PostJadwalDoctor
};