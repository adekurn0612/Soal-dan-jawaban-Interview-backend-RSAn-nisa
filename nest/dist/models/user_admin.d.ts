import { Model } from 'sequelize-typescript';
export interface user_adminAttributes {
    id?: number;
    username?: string;
    password?: string;
    userrole?: string;
}
export declare class user_admin extends Model<user_adminAttributes, user_adminAttributes> implements user_adminAttributes {
    id?: number;
    username?: string;
    password?: string;
    userrole?: string;
}
