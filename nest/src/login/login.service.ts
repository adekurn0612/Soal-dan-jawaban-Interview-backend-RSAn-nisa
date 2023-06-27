import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { user_admin } from 'models';
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

@Injectable()
export class LoginService {
  async create(createLoginDto: CreateLoginDto) {
    try {
      const { username, password } = createLoginDto;
      const user = await user_admin.findOne({ where: { username: username } });

      if (user === null) {
        throw new Error('Invalid username');
      }

      const passwordMatched = await bcrypt.compare(password, user.password);
      if (!passwordMatched) {
        throw new Error('Invalid password');
      }

      const token = jwt.sign({ username: username, role: user.userrole }, process.env.SECRET_KEY, { expiresIn: '1h' });
      return ({ message: `Welcome ${username}`, token: token });
    } catch (error) {
      return error.message
    }
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
