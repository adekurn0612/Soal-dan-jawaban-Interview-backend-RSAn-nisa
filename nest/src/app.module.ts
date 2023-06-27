import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { JadwalDoctorModule } from './jadwal-doctor/jadwal-doctor.module';
import { UserAdminModule } from './user-admin/user-admin.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { APP_GUARD } from '@nestjs/core';
import { LoggerMiddlewareAdmin, LoggerMiddlewareUser } from './security/Middlewere';
// import { AuthGuard } from './guard/guards';

@Module({
  imports: [SequelizeModule.forRootAsync({
    useFactory: () => ({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [],
      autoLoadModels: true, //untuk generate semua tabel
    }),
  }),
    LoginModule, JadwalDoctorModule, UserAdminModule],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard
    // },
    // {
    // provide: 'ROLES_METADATA',
    // useValue: ['admin', 'user']
  // }
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddlewareAdmin)
        .exclude({ path: 'login', method: RequestMethod.ALL })
        .forRoutes('*');
  
      consumer
        .apply(LoggerMiddlewareUser)
        .exclude({ path: 'login', method: RequestMethod.ALL },{ path: 'jadwal-doctor', method: RequestMethod.POST })
        .forRoutes('*');
  }
}


