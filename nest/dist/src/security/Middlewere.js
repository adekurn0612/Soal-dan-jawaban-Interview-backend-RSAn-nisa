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
exports.LoggerMiddlewareAdmin = exports.LoggerMiddlewareUser = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
class LoggerMiddlewareUser {
    use(req, res, next) {
        const token = req.headers.authorization;
        if (token) {
            try {
                jwt.verify(token, process.env.SECRET_KEY);
                next();
            }
            catch (e) {
                return res.status(401).json({ message: e.message });
            }
        }
        else {
            res.send("Silahkan Login");
        }
    }
}
exports.LoggerMiddlewareUser = LoggerMiddlewareUser;
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], LoggerMiddlewareUser.prototype, "use", null);
class LoggerMiddlewareAdmin {
    use(req, res, next) {
        const token = req.headers.authorization;
        if (token) {
            try {
                const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
                if (decodedToken.role !== "admin") {
                    throw new Error("Hanya admin yang bisa mengakses");
                }
                next();
            }
            catch (e) {
                return res.status(401).json({ message: e.message });
            }
        }
        else {
            res.send("Silahkan Login");
        }
    }
}
exports.LoggerMiddlewareAdmin = LoggerMiddlewareAdmin;
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], LoggerMiddlewareAdmin.prototype, "use", null);
//# sourceMappingURL=Middlewere.js.map