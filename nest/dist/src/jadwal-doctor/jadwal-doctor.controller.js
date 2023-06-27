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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JadwalDoctorController = void 0;
const common_1 = require("@nestjs/common");
const jadwal_doctor_service_1 = require("./jadwal-doctor.service");
const create_jadwal_doctor_dto_1 = require("./dto/create-jadwal-doctor.dto");
const update_jadwal_doctor_dto_1 = require("./dto/update-jadwal-doctor.dto");
let JadwalDoctorController = exports.JadwalDoctorController = class JadwalDoctorController {
    constructor(jadwalDoctorService) {
        this.jadwalDoctorService = jadwalDoctorService;
    }
    create(createJadwalDoctorDto) {
        return this.jadwalDoctorService.create(createJadwalDoctorDto);
    }
    findAll() {
        return this.jadwalDoctorService.findAll();
    }
    findOne(id) {
        return this.jadwalDoctorService.findOne(+id);
    }
    update(id, updateJadwalDoctorDto) {
        return this.jadwalDoctorService.update(+id, updateJadwalDoctorDto);
    }
    remove(id) {
        return this.jadwalDoctorService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_jadwal_doctor_dto_1.CreateJadwalDoctorDto]),
    __metadata("design:returntype", void 0)
], JadwalDoctorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JadwalDoctorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JadwalDoctorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_jadwal_doctor_dto_1.UpdateJadwalDoctorDto]),
    __metadata("design:returntype", void 0)
], JadwalDoctorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JadwalDoctorController.prototype, "remove", null);
exports.JadwalDoctorController = JadwalDoctorController = __decorate([
    (0, common_1.Controller)('jadwal-doctor'),
    __metadata("design:paramtypes", [jadwal_doctor_service_1.JadwalDoctorService])
], JadwalDoctorController);
//# sourceMappingURL=jadwal-doctor.controller.js.map