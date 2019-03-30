import {Module} from '@nestjs/common';
import {RenderModule} from 'nest-next';
import {ReactNextModule} from '@server/modules/reactNext/ReactNextModule';
import {HelloWorldContentService} from '@server/services/HelloWorldContentService';
import {HealthCheckModule} from '@server/modules/healthCheck/HealthCheckModule';

@Module({
    imports: [
        ReactNextModule,
        RenderModule,
        HealthCheckModule,
    ],
    controllers: [],
    providers: [HelloWorldContentService],
})
export class AppModule {}
