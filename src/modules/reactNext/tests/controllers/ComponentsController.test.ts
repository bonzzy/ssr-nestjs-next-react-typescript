import { Test, TestingModule } from '@nestjs/testing';
import {HomeController} from '@server/modules/reactNext/controllers/HomeController';
import {HelloWorldContentService} from '@server/services/HelloWorldContentService';

describe('HomeController', () => {
    let appController: HomeController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [HomeController],
            providers: [HelloWorldContentService],
        }).compile();

        appController = app.get<HomeController>(HomeController);
    });

    describe('/hello', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});
