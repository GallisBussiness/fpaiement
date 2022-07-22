"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
const PORT = 1009;
const options = {
    transport: microservices_1.Transport.TCP,
    options: { host: '127.0.0.1', port: PORT },
};
const logger = new common_1.Logger();
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, options);
    app
        .listen()
        .then(() => logger.log(`Paiement Microservice started in port: ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map