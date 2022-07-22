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
exports.AbonnementSchema = exports.Abonnement = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const pack_entity_1 = require("../../pack/entities/pack.entity");
let Abonnement = class Abonnement {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true }),
    __metadata("design:type", String)
], Abonnement.prototype, "doctorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Abonnement.prototype, "duree", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Abonnement.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: false }),
    __metadata("design:type", Boolean)
], Abonnement.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: pack_entity_1.Pack, required: true }),
    __metadata("design:type", pack_entity_1.Pack)
], Abonnement.prototype, "pack", void 0);
Abonnement = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false })
], Abonnement);
exports.Abonnement = Abonnement;
exports.AbonnementSchema = mongoose_1.SchemaFactory.createForClass(Abonnement);
//# sourceMappingURL=abonnement.entity.js.map