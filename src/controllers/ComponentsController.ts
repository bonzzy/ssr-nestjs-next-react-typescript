import {CacheInterceptor, Controller, Get, Render, UseInterceptors} from '@nestjs/common';
import {HelloWorldContentService} from '@server/services/HelloWorldContentService';

@UseInterceptors(CacheInterceptor)
@Controller('components')
export class ComponentsController {
    constructor(private readonly helloWorldContentService: HelloWorldContentService) {}

    @Get()
    getHello(): string {
        return this.helloWorldContentService.getHello();
    }

    @Render('Home')
    @Get('/home')
    component(): {title: string} {
        return {
            title: 'Nestjs with next',
        };
    }
}
