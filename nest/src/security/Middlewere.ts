import { NestMiddleware, Next, Res, Req } from "@nestjs/common";
import * as jwt from "jsonwebtoken";

export class LoggerMiddlewareUser implements NestMiddleware {
  use(@Req() req: any, @Res() res: any, @Next() next: any) {
    const token = req.headers.authorization;
    if (token) {
      try {
        jwt.verify(token, process.env.SECRET_KEY);
        next();
      } catch (e) {
        return res.status(401).json({ message: e.message });
      }
    } else {
      res.send("Silahkan Login");
    }
  }
}

export class LoggerMiddlewareAdmin implements NestMiddleware {
  use(@Req() req: any, @Res() res: any, @Next() next: any) {
    const token = req.headers.authorization;
    if (token) {
      try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY) as { role: string };

        if (decodedToken.role !== "admin") {
          throw new Error("Hanya admin yang bisa mengakses");
        }

        next();
      } catch (e) {
        return res.status(401).json({ message: e.message });
      }
    } else {
      res.send("Silahkan Login");
    }
  }
}
