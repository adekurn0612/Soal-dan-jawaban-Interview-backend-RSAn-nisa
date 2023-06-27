import { Module } from '@nestjs/common';
import { JadwalDoctorService } from './jadwal-doctor.service';
import { JadwalDoctorController } from './jadwal-doctor.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { jadwal_doctor } from 'models';

@Module({
  imports:[SequelizeModule.forFeature([jadwal_doctor])],
  controllers: [JadwalDoctorController],
  providers: [JadwalDoctorService]
})
export class JadwalDoctorModule {}
