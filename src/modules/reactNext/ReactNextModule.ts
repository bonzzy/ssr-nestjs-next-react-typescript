import {CacheModule, Module} from '@nestjs/common';
import {HelloWorldContentService} from '@server/services/HelloWorldContentService';
import {HomeController} from '@server/modules/reactNext/controllers/HomeController';

@Module({
    imports: [CacheModule.register()],
    controllers: [HomeController],
    providers: [HelloWorldContentService],
})
export class ReactNextModule {}
