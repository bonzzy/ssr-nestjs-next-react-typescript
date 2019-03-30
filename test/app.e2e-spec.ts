import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import {AppModule} from '@server/AppModule';
import {INestApplication} from '@nestjs/common';

describe('HomeController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/home/hello (GET)', () => {
    return request(app.getHttpServer())
      .get('/home/hello')
      .expect(200)
      .expect('Hello World!');
  });
});
