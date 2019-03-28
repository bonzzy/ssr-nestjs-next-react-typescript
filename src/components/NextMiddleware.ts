import {Injectable, NestMiddleware, OnApplicationBootstrap, OnModuleInit} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class NextMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: () => void) {
        console.log('Request... is here');
        // await app.prepare();
        // await handle(req, res);
        next();
    }

    // public resolve(req: Request, res: Response, next: () => void) {
    //     console.log("I am here too")
    //     // return handle(req, res);
    // }
}
