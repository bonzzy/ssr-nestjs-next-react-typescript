import {INestApplication, MiddlewareConsumer, Module, NestModule, OnModuleInit} from '@nestjs/common';
import {NextMiddleware} from './NextMiddleware';
import {Server} from 'next';
import Next from 'next';
import { RenderService, RenderFilter } from 'nest-next';
import {APP_FILTER} from '@nestjs/core';
import {MiddlewareConfiguration} from '@nestjs/common/interfaces';
import {MiddlewareModule} from '@nestjs/core/middleware/middleware-module';

export interface RegisterOptions {
    viewsDir: null | string;
}

@Module({
    providers: [
        RenderService,
    ],
})
export class NextModule implements OnModuleInit {
    private app?: INestApplication;
    private server?: Server;

    constructor(private readonly service: RenderService) {}

    public register(
        app: INestApplication,
        server: Server,
        options: Partial<RegisterOptions> = {},
    ) {
        this.app = app;
        this.server = server;

        this.service.setRequestHandler(this.server.getRequestHandler());
        this.service.setRenderer(this.server.render.bind(this.server));
        this.service.setErrorRenderer(this.server.renderError.bind(this.server));
        this.service.bindHttpServer(this.app.getHttpAdapter());

        this.app.useGlobalFilters(new RenderFilter(this.service));

        if (options.viewsDir !== undefined) {
            this.service.setViewsDir(options.viewsDir);
        }
    }

    async onModuleInit(): Promise<void> {
        const dev = process.env.NODE_ENV !== 'production';
        const app = Next({ dev });
        await app.prepare();
        // this.register(, app, {viewsDir: './pages'});
    }
}
