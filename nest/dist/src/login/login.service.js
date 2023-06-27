"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let LoginService = exports.LoginService = class LoginService {
    async create(createLoginDto) {
        try {
            const { username, password } = createLoginDto;
            const user = await models_1.user_admin.findOne({ where: { username: username } });
            if (user === null) {
                throw new Error('Invalid username');
            }
            const passwordMatched = await bcrypt.compare(password, user.password);
            if (!passwordMatched) {
                throw new Error('Invalid password');
            }
            const token = jwt.sign({ username: username, role: user.userrole }, process.env.SECRET_KEY, { expiresIn: '1h' });
            return ({ message: `Welcome ${username}`, token: token });
        }
        catch (error) {
            return error.message;
        }
    }
    findAll() {
        return `This action returns all login`;
    }
    findOne(id) {
        return `This action returns a #${id} login`;
    }
    update(id, updateLoginDto) {
        return `This action updates a #${id} login`;
    }
    remove(id) {
        return `This action removes a #${id} login`;
    }
};
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)()
], LoginService);
//# sourceMappingURL=login.service.js.map