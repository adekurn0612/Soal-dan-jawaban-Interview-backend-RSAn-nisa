"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const login_module_1 = require("./login/login.module");
const jadwal_doctor_module_1 = require("./jadwal-doctor/jadwal-doctor.module");
const user_admin_module_1 = require("./user-admin/user-admin.module");
const sequelize_1 = require("@nestjs/sequelize");
const Middlewere_1 = require("./security/Middlewere");
let AppModule = exports.AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(Middlewere_1.LoggerMiddlewareAdmin)
            .exclude({ path: 'login', method: common_1.RequestMethod.ALL })
            .forRoutes('*');
        consumer
            .apply(Middlewere_1.LoggerMiddlewareUser)
            .exclude({ path: 'login', method: common_1.RequestMethod.ALL }, { path: 'jadwal-doctor', method: common_1.RequestMethod.POST })
            .forRoutes('*');
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forRootAsync({
                useFactory: () => ({
                    dialect: 'postgres',
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT),
                    username: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                    models: [],
                    autoLoadModels: true,
                }),
            }),
            login_module_1.LoginModule, jadwal_doctor_module_1.JadwalDoctorModule, user_admin_module_1.UserAdminModule],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map