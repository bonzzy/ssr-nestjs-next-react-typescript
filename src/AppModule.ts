import {Module} from '@nestjs/common';
import {RenderModule} from 'nest-next';
import {ReactNextModule} from '@server/modules/reactNext/ReactNextModule';
import {HelloWorldContentService} from '@server/services/HelloWorldContentService';

@Module({
    imports: [ReactNextModule, RenderModule],
    controllers: [],
    providers: [HelloWorldContentService],
})
export class AppModule {}
