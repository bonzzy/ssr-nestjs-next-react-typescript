import {CacheModule, Module} from '@nestjs/common';
import {RenderModule} from 'nest-next';
import {ComponentsController} from '@server/controllers/ComponentsController';
import {HelloWorldContentService} from '@server/services/HelloWorldContentService';

@Module({
    imports: [RenderModule, CacheModule.register()],
    controllers: [ComponentsController],
    providers: [HelloWorldContentService],
})
export class AppModule {}
