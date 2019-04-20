import {Controller, Get, Render} from '@nestjs/common';
import {HelloWorldContentService} from '@server/services/HelloWorldContentService';
import {HelloWorldViewObject} from '@src/views/HelloWorld';

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

    @Render('HelloWorld')
    @Get('/helloworld')
    helloWorld(): ComponentProps<HelloWorldViewObject> {
        return {
            nonce: 'NonceHash',
            viewObject: {
                name: 'Tomislav',
            },
        };
    }

    @Render('Home')
    @Get('/')
    component(): ComponentProps<{title: string}> {
        return {
            nonce: 'NonceHash',
            viewObject: {
                title: 'Tomislav',
            },
        };
    }
}
