import {
    TerminusEndpoint,
    TerminusOptionsFactory,
    DNSHealthIndicator,
    TerminusModuleOptions, HealthIndicatorResult,
} from '@nestjs/terminus';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TerminusOptionsService implements TerminusOptionsFactory {
    constructor(
        private readonly dns: DNSHealthIndicator,
    ) {}

    createTerminusOptions(): TerminusModuleOptions {
        const status: HealthIndicatorResult = {};
        const healthEndpoint: TerminusEndpoint = {
            url: '/health',
            healthIndicators: [
                async () => this.dns.pingCheck('google', 'https://google.com'),
            ],
        };
        const upEndpoint: TerminusEndpoint = {
            url: '/up',
            healthIndicators: [
                async () => status,
            ],
        };
        return {
            endpoints: [healthEndpoint, upEndpoint],
        };
    }
}
