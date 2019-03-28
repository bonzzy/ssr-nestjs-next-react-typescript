import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {CompressionMiddleware} from '@nest-middlewares/compression';

@Module({
    controllers: [],
    providers: [],
    imports: [
    ],
})
export class NextModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(CompressionMiddleware)
            .forRoutes('components/home');
    }
}
