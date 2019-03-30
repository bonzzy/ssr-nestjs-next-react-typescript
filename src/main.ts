import compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { RenderModule } from 'nest-next';
import Next from 'next';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import {AppModule} from '@server/AppModule';

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = Next({ dev });

  await app.prepare();

  const server = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
  );
  server.use(compression({}));

  const renderer = server.get(RenderModule);
  renderer.register(server, app);

  await server.listen(process.env.PORT || 3000);
}

bootstrap();
