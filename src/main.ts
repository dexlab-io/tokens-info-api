import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	app.setGlobalPrefix('v1');
	await app.listen(3000);
}
bootstrap();
