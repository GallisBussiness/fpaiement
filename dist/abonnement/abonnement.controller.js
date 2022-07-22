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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbonnementController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const schedule_1 = require("@nestjs/schedule");
const abonnement_service_1 = require("./abonnement.service");
const create_abonnement_dto_1 = require("./dto/create-abonnement.dto");
const update_abonnement_dto_1 = require("./dto/update-abonnement.dto");
let AbonnementController = class AbonnementController {
    constructor(abonnementService) {
        this.abonnementService = abonnementService;
    }
    create(createAbonnementDto) {
        return this.abonnementService.create(createAbonnementDto);
    }
    findAll() {
        return this.abonnementService.findAll();
    }
    findOne(id) {
        return this.abonnementService.findOne(id);
    }
    update(updateAbonnementDto) {
        return this.abonnementService.update(updateAbonnementDto.id, updateAbonnementDto);
    }
    remove(id) {
        return this.abonnementService.remove(id);
    }
    async handleCron() {
        const { data: abonnements } = await this.abonnementService.findAll();
        abonnements === null || abonnements === void 0 ? void 0 : abonnements.forEach(async (a) => {
            if (a.duree > 0) {
                a.duree -= 1;
                await a.save();
            }
            else {
                a.isActive = false;
                await a.save();
            }
        });
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('createAbonnement'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_abonnement_dto_1.CreateAbonnementDto]),
    __metadata("design:returntype", void 0)
], AbonnementController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllAbonnement'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AbonnementController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneAbonnement'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AbonnementController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateAbonnement'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_abonnement_dto_1.UpdateAbonnementDto]),
    __metadata("design:returntype", void 0)
], AbonnementController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeAbonnement'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AbonnementController.prototype, "remove", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_10AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AbonnementController.prototype, "handleCron", null);
AbonnementController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [abonnement_service_1.AbonnementService])
], AbonnementController);
exports.AbonnementController = AbonnementController;
//# sourceMappingURL=abonnement.controller.js.map