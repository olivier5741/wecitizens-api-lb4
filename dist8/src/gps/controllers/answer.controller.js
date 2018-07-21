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
/* tslint:disable:no-any */
const rest_1 = require("@loopback/rest");
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by answer
 *
 */
class AnswerController {
    constructor() { }
    /**
     * > Do not fill in `segment_key` when this is a voter submission
  
     */
    async gpsSubmissionPost() {
        throw new Error('Not implemented');
    }
    /**
     * Mock id `0dc3634b-5561-42d6-9b8c-c5c68b93bfd5`
     */
    async gpsSubmissionGet(id) {
        throw new Error('Not implemented');
    }
    /**
     *
     */
    async gpsSubmissionPut(id) {
        throw new Error('Not implemented');
    }
}
__decorate([
    rest_1.operation('post', '/gps/submission'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "gpsSubmissionPost", null);
__decorate([
    rest_1.operation('get', '/gps/submission/{id}'),
    __param(0, rest_1.param({ name: 'id', in: 'path' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "gpsSubmissionGet", null);
__decorate([
    rest_1.operation('put', '/gps/submission/{id}'),
    __param(0, rest_1.param({ name: 'id', in: 'path' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "gpsSubmissionPut", null);
exports.AnswerController = AnswerController;
//# sourceMappingURL=answer.controller.js.map