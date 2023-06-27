import { JadwalDoctorService } from './jadwal-doctor.service';
import { CreateJadwalDoctorDto } from './dto/create-jadwal-doctor.dto';
import { UpdateJadwalDoctorDto } from './dto/update-jadwal-doctor.dto';
export declare class JadwalDoctorController {
    private readonly jadwalDoctorService;
    constructor(jadwalDoctorService: JadwalDoctorService);
    create(createJadwalDoctorDto: CreateJadwalDoctorDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateJadwalDoctorDto: UpdateJadwalDoctorDto): string;
    remove(id: string): string;
}
