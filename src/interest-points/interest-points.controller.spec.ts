import { Test, TestingModule } from '@nestjs/testing';
import { InterestPointsController } from './interest-points.controller';
import { InterestPointsService } from './interest-points.service';

describe('InterestPointsController', () => {
  let controller: InterestPointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterestPointsController],
      providers: [InterestPointsService],
    }).compile();

    controller = module.get<InterestPointsController>(InterestPointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
