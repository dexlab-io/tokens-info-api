import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	// app.setGlobalPrefix('v1');

	const options = new DocumentBuilder()
		.setTitle('ERC20Tokens docs')
		.setDescription('Public API of ERC20 token informations and images 🔥')
		.setVersion('0.1')
		.addTag('erc20')
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/api', app, document);
	await app.listen(3000);
}
bootstrap();
