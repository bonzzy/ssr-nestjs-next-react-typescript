import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldContentService {
    getHello(): string {
        return 'Hello World!';
    }
}
