import { NestMiddleware } from "@nestjs/common";
export declare class LoggerMiddlewareUser implements NestMiddleware {
    use(req: any, res: any, next: any): any;
}
export declare class LoggerMiddlewareAdmin implements NestMiddleware {
    use(req: any, res: any, next: any): any;
}
