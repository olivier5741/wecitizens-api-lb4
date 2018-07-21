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
 * by district
 *
 */
class DistrictController {
    constructor() { }
    /**
     * For first app release, set the main election key (`2018_be_municipal`) to `election_key` and whether the voter enters a number or not use `code_contains` or `name_contains`
     */
    async voteDistrictSearchGet(election_key, code_contains, name_contains) {
        throw new Error('Not implemented');
    }
}
__decorate([
    rest_1.operation('get', '/vote/district/search'),
    __param(0, rest_1.param({ name: 'election_key', in: 'query' })), __param(1, rest_1.param({ name: 'code_contains', in: 'query' })), __param(2, rest_1.param({ name: 'name_contains', in: 'query' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], DistrictController.prototype, "voteDistrictSearchGet", null);
exports.DistrictController = DistrictController;
//# sourceMappingURL=district.controller.js.map