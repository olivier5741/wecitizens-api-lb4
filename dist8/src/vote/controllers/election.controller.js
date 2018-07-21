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
 * by election
 *
 */
class ElectionController {
    constructor() { }
    /**
     * For first app release, GET `2018_be_municipal`
     */
    async voteElectionGet(key) {
        throw new Error('Not implemented');
    }
    /**
     * For first app release, set the main election key (`2018_be_municipal`) to  `main_election_key` and `district_key` depends on what the voter chose as district (drop down list)
     */
    async voteElectionByDistrictGet(main_election_key, district_key) {
        throw new Error('Not implemented');
    }
}
__decorate([
    rest_1.operation('get', '/vote/election/{key}'),
    __param(0, rest_1.param({ name: 'key', in: 'path' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ElectionController.prototype, "voteElectionGet", null);
__decorate([
    rest_1.operation('get', '/vote/election/{main_election_key}/district/{district_key}'),
    __param(0, rest_1.param({ name: 'main_election_key', in: 'path' })), __param(1, rest_1.param({ name: 'district_key', in: 'path' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ElectionController.prototype, "voteElectionByDistrictGet", null);
exports.ElectionController = ElectionController;
//# sourceMappingURL=election.controller.js.map