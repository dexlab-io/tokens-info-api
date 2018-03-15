import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	root(): string {
    return 'Public API of ERC20 token informations and images 🔥 by <a href="https://www.dexlab.io/">dexlab.io</a>';
  }
}
