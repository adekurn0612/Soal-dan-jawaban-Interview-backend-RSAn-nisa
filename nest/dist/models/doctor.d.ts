import { Model } from 'sequelize-typescript';
export interface doctorAttributes {
    id?: number;
    nama_doctor?: string;
}
export declare class doctor extends Model<doctorAttributes, doctorAttributes> implements doctorAttributes {
    id?: number;
    nama_doctor?: string;
}
