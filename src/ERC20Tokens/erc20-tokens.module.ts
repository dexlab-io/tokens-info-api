import { Module } from '@nestjs/common';
import { ERC20TokensController } from './erc20-tokens.controller';

@Module({
  imports: [],
  controllers: [ERC20TokensController],
  components: [],
})
export class ERC20TokensModule {}
