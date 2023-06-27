"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JadwalDoctorService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../../models");
const dayjs = require("dayjs");
let JadwalDoctorService = exports.JadwalDoctorService = class JadwalDoctorService {
    constructor(sequelize) {
        this.sequelize = sequelize;
    }
    async create(createJadwalDoctorDto) {
        try {
            const { doctor_id, day, start_date, end_date, time_start, time_finish, qouta, status, } = createJadwalDoctorDto;
            console.log(doctor_id, day, start_date, end_date, time_start, time_finish, qouta, status);
            const startDateObj = dayjs(start_date, 'YYYY-MM-DD');
            const endDateObj = dayjs(end_date, 'YYYY-MM-DD');
            const mondays = [];
            let currentDate = startDateObj;
            while (currentDate.isBefore(endDateObj) ||
                currentDate.isSame(endDateObj, 'day')) {
                if (currentDate.day() === 1) {
                    mondays.push(currentDate.format('YYYY-MM-DD'));
                }
                currentDate = currentDate.add(1, 'day');
            }
            console.log(mondays);
            const output = [];
            for (const date of mondays) {
                const data = await models_1.jadwal_doctor.create({
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
        }
        catch (error) {
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
      `);
            return ({ message: 'succes', result: result[0] });
        }
        catch (error) {
            return (error.message);
        }
    }
    findOne(id) {
        return `This action returns a #${id} jadwalDoctor`;
    }
    update(id, updateJadwalDoctorDto) {
        return `This action updates a #${id} jadwalDoctor`;
    }
    remove(id) {
        return `This action removes a #${id} jadwalDoctor`;
    }
};
exports.JadwalDoctorService = JadwalDoctorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [sequelize_typescript_1.Sequelize])
], JadwalDoctorService);
//# sourceMappingURL=jadwal-doctor.service.js.map