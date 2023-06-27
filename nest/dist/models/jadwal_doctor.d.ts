import { Model } from 'sequelize-typescript';
export interface jadwal_doctorAttributes {
    id?: number;
    doctor_id?: number;
    time_start?: string;
    time_finish?: string;
    qouta?: number;
    status?: boolean;
    datee?: string;
    day?: string;
}
export declare class jadwal_doctor extends Model<jadwal_doctorAttributes, jadwal_doctorAttributes> implements jadwal_doctorAttributes {
    id?: number;
    doctor_id?: number;
    time_start?: string;
    time_finish?: string;
    qouta?: number;
    status?: boolean;
    datee?: string;
    day?: string;
}
