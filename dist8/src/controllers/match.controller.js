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
/* tslint:disable:no-any */
const rest_1 = require("@loopback/rest");
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by match
 *
 */
class MatchController {
    constructor() { }
    /**
     *
     */
    async gpsMatchPost() {
        throw new Error('Not implemented');
    }
}
__decorate([
    rest_1.operation('post', '/gps/match'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "gpsMatchPost", null);
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map