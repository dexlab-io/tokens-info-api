import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ERC20TokensModule } from './ERC20Tokens/erc20-tokens.module';

@Module({
  imports: [ERC20TokensModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
