import { IsNotEmpty } from "class-validator";

export class CreateJadwalDoctorDto {
    day : any;

    @IsNotEmpty()
    start_date? : Date;

    @IsNotEmpty()
    end_date? : Date ;

    @IsNotEmpty()
    doctor_id?: any;

    @IsNotEmpty()
    time_start?:any;

    @IsNotEmpty()
    time_finish?:any;

    @IsNotEmpty()
    qouta? : any;

    @IsNotEmpty()
    status? : any;
}
