import { Test, TestingModule } from '@nestjs/testing';
import { InterestPointsService } from './interest-points.service';

describe('InterestPointsService', () => {
  let service: InterestPointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterestPointsService],
    }).compile();

    service = module.get<InterestPointsService>(InterestPointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
