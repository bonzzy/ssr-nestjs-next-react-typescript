import { Test, TestingModule } from '@nestjs/testing';
import {ComponentsController} from '@server/controllers/ComponentsController';
import {HelloWorldContentService} from '@server/services/HelloWorldContentService';

describe('ComponentsController', () => {
    let appController: ComponentsController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ComponentsController],
            providers: [HelloWorldContentService],
        }).compile();

        appController = app.get<ComponentsController>(ComponentsController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});
