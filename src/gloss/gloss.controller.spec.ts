import { Test, TestingModule } from '@nestjs/testing';
import { GlossController } from './gloss.controller';

describe('GlossController', () => {
  let controller: GlossController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlossController],
    }).compile();

    controller = module.get<GlossController>(GlossController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
