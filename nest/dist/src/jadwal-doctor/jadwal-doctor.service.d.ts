import { CreateJadwalDoctorDto } from './dto/create-jadwal-doctor.dto';
import { UpdateJadwalDoctorDto } from './dto/update-jadwal-doctor.dto';
import { Sequelize } from 'sequelize-typescript';
export declare class JadwalDoctorService {
    private sequelize;
    constructor(sequelize: Sequelize);
    create(createJadwalDoctorDto: CreateJadwalDoctorDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateJadwalDoctorDto: UpdateJadwalDoctorDto): string;
    remove(id: number): string;
}
