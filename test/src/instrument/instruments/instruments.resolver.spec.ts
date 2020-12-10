import { Test, TestingModule } from '@nestjs/testing';
import { InstrumentsResolver } from './instruments.resolver';

describe('InstrumentsResolver', () => {
  let resolver: InstrumentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstrumentsResolver],
    }).compile();

    resolver = module.get<InstrumentsResolver>(InstrumentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
