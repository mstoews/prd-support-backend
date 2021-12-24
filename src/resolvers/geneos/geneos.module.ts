import { Module } from '@nestjs/common';
import { GeneosResolver } from './geneos.resolver';

@Module({
  providers: [GeneosResolver]
})
export class GeneosModule {}
