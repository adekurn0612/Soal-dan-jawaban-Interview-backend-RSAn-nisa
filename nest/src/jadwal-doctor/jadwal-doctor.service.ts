import { Injectable } from '@nestjs/common';
import { CreateJadwalDoctorDto } from './dto/create-jadwal-doctor.dto';
import { UpdateJadwalDoctorDto } from './dto/update-jadwal-doctor.dto';
import { Sequelize } from 'sequelize-typescript';
import { jadwal_doctor } from 'models';
import * as dayjs from 'dayjs';

@Injectable()
export class JadwalDoctorService {
  constructor(
    private  sequelize : Sequelize
  ){}
  async create(createJadwalDoctorDto: CreateJadwalDoctorDto) {
    try {
      const {
        doctor_id,
        day,
        start_date,
        end_date,
        time_start,
        time_finish,
        qouta,
        status,
      } = createJadwalDoctorDto;
console.log(doctor_id,
  day,
  start_date,
  end_date,
  time_start,
  time_finish,
  qouta,
  status,)
      const startDateObj = dayjs(start_date, 'YYYY-MM-DD');
      const endDateObj = dayjs(end_date, 'YYYY-MM-DD');

      const mondays = [];
      let currentDate = startDateObj;
      while (
        currentDate.isBefore(endDateObj) ||
        currentDate.isSame(endDateObj, 'day')
      ) {
        if (currentDate.day() === 1) {
          mondays.push(currentDate.format('YYYY-MM-DD'));
        }
        currentDate = currentDate.add(1, 'day');
      }
      console.log(mondays)
      const output = [];
      for (const date of mondays) {
        const data = await jadwal_doctor.create({
          day,
          datee: date,
          doctor_id,
          time_start,
          time_finish,
          qouta,
          status,
        });
        output.push(data);
      }

      return { message: 'success', output };
    } catch (error) {
      return error.message;
    }
  }
  
  
  

  async findAll() {
    try {
      const result = await this.sequelize.query(`SELECT jadwal_doctor.id,
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
      `)
      return({message : 'succes' , result:result[0]})
    } catch (error) {
      return(error.message)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} jadwalDoctor`;
  }

  update(id: number, updateJadwalDoctorDto: UpdateJadwalDoctorDto) {
    return `This action updates a #${id} jadwalDoctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} jadwalDoctor`;
  }
}
