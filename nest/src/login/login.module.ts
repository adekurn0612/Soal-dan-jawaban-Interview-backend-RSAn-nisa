import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { user_admin } from 'models';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([user_admin])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
