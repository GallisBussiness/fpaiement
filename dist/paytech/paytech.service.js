"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaytechService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
let PaytechService = class PaytechService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    authenticate(data) {
        return this.http
            .post('https://paytech.sn/api/payment/request-payment', data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                API_KEY: this.config.get('PAYTECH_API_KEY'),
                API_SECRET: this.config.get('PAYTECH_API_SECRET'),
            },
        })
            .pipe((0, rxjs_1.map)((res) => res.data));
    }
};
PaytechService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService, config_1.ConfigService])
], PaytechService);
exports.PaytechService = PaytechService;
//# sourceMappingURL=paytech.service.js.map