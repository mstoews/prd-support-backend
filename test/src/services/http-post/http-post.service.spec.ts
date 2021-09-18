import { Test, TestingModule } from '@nestjs/testing';
import { HttpPostService } from './http-post.service';

describe('HttpPostService', () => {
  let service: HttpPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpPostService],
    }).compile();

    service = module.get<HttpPostService>(HttpPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
