import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import {TerminusOptionsService} from '@server/modules/healthCheck/services/TerminusOptionsService';

@Module({
    imports: [
        TerminusModule.forRootAsync({
            useClass: TerminusOptionsService,
        }),
    ],
})
export class HealthCheckModule {}
