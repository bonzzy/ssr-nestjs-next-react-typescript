import {CacheInterceptor, Controller, Get, Render} from '@nestjs/common';
import {HelloWorldContentService} from '@server/services/HelloWorldContentService';

export interface ComponentProps<T> {
    viewObject: T;
    nonce: string;
}
@Controller('home')
export class HomeController {
    constructor(private readonly helloWorldContentService: HelloWorldContentService) {}

    @Get('/hello')
    getHello(): string {
        return this.helloWorldContentService.getHello();
    }

    @Render('Home')
    @Get('/')
    component(): ComponentProps<{title: string}> {
        return {
            nonce: 'NonceHash',
            viewObject: {
                title: 'Nestjs with next',
            },
        };
    }
}
