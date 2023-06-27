import { PartialType } from '@nestjs/mapped-types';
import { CreateJadwalDoctorDto } from './create-jadwal-doctor.dto';

export class UpdateJadwalDoctorDto extends PartialType(CreateJadwalDoctorDto) {}
